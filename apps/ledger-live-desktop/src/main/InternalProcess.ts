import { dialog } from "electron";
import { ChildProcess, ForkOptions, fork } from "child_process";
import forceKill from "tree-kill";
import { Message } from "~/internal/types";
import { InMemoryLogger } from "./logger";

export type InternalMessage = { type: string; requestId: string; error: unknown; data: unknown };

let id = 0;
const doLog = (type: string, message: string, data?: unknown) => {
  InMemoryLogger.getLogger().log({ type, message, date: new Date(), id: (id++).toString(), data });
};

class InternalProcess {
  timeout: number;
  process: ChildProcess | null;
  active: boolean;
  onStartCallback: (() => void) | null;
  onMessageCallback: ((message: InternalMessage) => void) | null;
  onExitCallback:
    | ((code: number | null, signal: string | null, unexpected: boolean) => void)
    | null;

  messageQueue: Message[];
  path: string | undefined;
  args: string[] | undefined;
  options: ForkOptions | undefined;

  constructor({ timeout }: { timeout: number }) {
    this.process = null;
    this.timeout = timeout;
    this.active = false;
    this.onStartCallback = null;
    this.onMessageCallback = null;
    this.onExitCallback = null;
    this.messageQueue = [];
  }

  onMessage(callback: typeof this.onMessageCallback) {
    this.onMessageCallback = callback;
  }

  onExit(callback: typeof this.onExitCallback) {
    this.onExitCallback = callback;
  }

  run() {
    while (
      this.messageQueue.length &&
      this.active &&
      this.process &&
      this.process.pid &&
      this.process.connected
    ) {
      const message = this.messageQueue.shift();
      this.process?.send && this.process.send(message as object);
    }
  }

  send(message: Message) {
    this.messageQueue.push(message);
    if (this.active) {
      this.run();
    }
  }

  onStart(callback: typeof this.onStartCallback) {
    this.onStartCallback = callback;
  }

  configure(path: string, args: Array<string>, options: ForkOptions) {
    this.path = path;
    this.args = args;
    this.options = options;
  }

  start() {
    doLog("InternalProcess", "start()");
    if (this.process) {
      throw new Error("Internal process is already running !");
    }
    this.process = fork(this.path!, this.args, this.options);
    this.active = true;
    const pid = this.process.pid;
    console.log(`spawned internal process ${pid}`);
    this.process.on("exit", (code, signal) => {
      // TODO: show error
      dialog.showErrorBox("InternalProcess", `exit ${code} ${signal}`);
      doLog("InternalProcess", 'this.process.on("exit")', { code, signal });
      this.process = null;
      if (code !== null) {
        console.log(`internal process ${pid} gracefully exited with code ${code}`);
      } else {
        console.log(`internal process ${pid} got killed by signal ${signal}`);
      }
      if (this.onExitCallback) {
        this.onExitCallback(code, signal, this.active);
      }
    });
    this.process.on("message", message => {
      if (this.onMessageCallback && this.active) {
        this.onMessageCallback(message as InternalMessage);
      }
    });
    this.process.on("error", error => {
      // TODO: show error
      dialog.showErrorBox("InternalProcess", "error:\n" + error.toString());
    });
    this.process.on("disconnect", () => {
      // TODO: show error
      dialog.showErrorBox("InternalProcess", 'on("disconnect")');
    });
    this.process.on("close", (code, signal) => {
      // TODO: show error
      dialog.showErrorBox("InternalProcess", `on("close")\ncode:${code}\nsignal:${signal}`);
    });

    if (this.messageQueue.length) {
      this.run();
    }
    if (this.onStartCallback) {
      this.onStartCallback();
    }
  }

  stop() {
    return new Promise(resolve => {
      if (!this.process) {
        resolve(false);
        return;
      }
      this.messageQueue = [];
      const pid = this.process.pid;
      console.log(`ending process ${pid} ...`);
      this.active = false;
      this.process.once("exit", () => {
        resolve(true);
      });
      this.process.disconnect();
      setTimeout(() => {
        if (this.process && this.process.pid === pid) {
          forceKill(pid!, "SIGKILL");
        }
      }, this.timeout);
    });
  }

  restart() {
    return this.stop().then(() => {
      this.start();
    });
  }
}
export default InternalProcess;
