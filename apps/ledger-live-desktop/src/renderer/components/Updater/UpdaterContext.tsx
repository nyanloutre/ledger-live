import { ipcRenderer, IpcRendererEvent } from "electron";
import React, { Component } from "react";

export type UpdateStatus =
  | "idle"
  | "checking-for-update"
  | "update-available"
  | "update-not-available"
  | "download-progress"
  | "update-downloaded"
  | "checking"
  | "check-success"
  | "downloading-update"
  | "error";

export type UpdaterContextType = {
  status: UpdateStatus;
  downloadProgress: number;
  version: string | undefined | null;
  quitAndInstall: () => void;
  setStatus: (a: UpdateStatus) => void;
  error: Error | undefined | null;
};

export type MaybeUpdateContextType = UpdaterContextType | undefined | null;

type UpdaterProviderProps = {
  children: React.ReactNode;
};

type UpdaterProviderState = {
  status: UpdateStatus;
  downloadProgress: number;
  version?: string;
  error: Error | undefined | null;
};

export const UpdaterContext = React.createContext<MaybeUpdateContextType>(null);
class Provider extends Component<UpdaterProviderProps, UpdaterProviderState> {
  constructor(props: UpdaterProviderProps) {
    super(props);
    ipcRenderer.on("updater", this.listener);
    if (!__DEV__) {
      ipcRenderer.send("updater", "init");
    }
    this.state = {
      status: "idle",
      downloadProgress: 0,
      error: null,
      version: process.env.DEBUG_UPDATE ? "1.2.3" : undefined,
    };
  }

  componentWillUnmount() {
    ipcRenderer.removeListener("updater", this.listener);
  }

  listener = (
    _e: IpcRendererEvent,
    args: {
      status: UpdateStatus;
      payload?: {
        percent?: number;
        version?: string;
      };
    },
  ) => {
    if (args.status === "download-progress") {
      const downloadProgress =
        args.payload && args.payload.percent ? +args.payload.percent.toFixed(0) : 0;
      this.setState({
        status: args.status,
        downloadProgress,
      });
    } else if (args.status === "update-available") {
      this.setState({
        status: args.status,
        version: args.payload ? args.payload.version : undefined,
      });
    } else {
      this.setStatus(args.status);
    }
  };

  setStatus = (status: UpdateStatus) => {
    this.setState({
      status,
    });
  };

  setDownloadProgress = (downloadProgress: number) =>
    this.setState({
      downloadProgress,
    });

  quitAndInstall = () => ipcRenderer.send("updater", "quit-and-install");

  render() {
    const { status, downloadProgress, error, version } = this.state;
    const value = {
      status,
      version,
      downloadProgress,
      error,
      setStatus: this.setStatus,
      quitAndInstall: this.quitAndInstall,
    };
    return <UpdaterContext.Provider value={value}>{this.props.children}</UpdaterContext.Provider>;
  }
}

export const UpdaterProvider = Provider;
