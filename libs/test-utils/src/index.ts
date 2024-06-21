import handler from "serve-handler";
import http from "http";
import net from "net";
import path from "path";
import { AppManifest } from "@ledgerhq/live-common/wallet-api/types";

export function createDummyServer(appPath: string) {
  return http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/vercel/serve-handler#options

    handler(request, response, {
      public: path.resolve(__dirname, "..", "..", "..", "tests", appPath),
    });
  });
}

export function startDummyServer(dummyAppServer: http.Server, port = 0): Promise<number> {
  return new Promise((resolve, reject) => {
    dummyAppServer
      .listen(port, "localhost")
      .once("listening", () => {
        resolve((dummyAppServer.address() as net.AddressInfo).port as number);
      })
      .once("error", (error: unknown) => {
        dummyAppServer.close();
        reject(error);
      });
  });
}

export function getLiveAppManifest(
  params: Partial<AppManifest> & Pick<AppManifest, "id" | "url">,
): AppManifest {
  return {
    name: "Generic Live App",
    homepageUrl: "https://developers.ledger.com/",
    icon: "",
    platforms: ["ios", "android", "desktop"],
    apiVersion: "^1.0.0 || ~0.0.1",
    manifestVersion: "1",
    branch: "stable",
    categories: ["tools"],
    currencies: "*",
    content: {
      shortDescription: {
        en: "Generic Live App",
      },
      description: {
        en: "Generic Live App for testing",
      },
    },
    permissions: [
      "account.list",
      "account.receive",
      "account.request",
      "currency.list",
      "device.close",
      "device.exchange",
      "device.transport",
      "message.sign",
      "transaction.sign",
      "transaction.signAndBroadcast",
      "storage.set",
      "storage.get",
      "bitcoin.getXPub",
      "wallet.capabilities",
      "wallet.userId",
      "wallet.info",
    ],
    domains: ["https://*"],
    visibility: "complete",
    ...params,
  };
}

export function stopDummyServer(dummyAppServer: http.Server): Promise<void> {
  dummyAppServer.close();
  return new Promise(resolve => {
    dummyAppServer.on("close", () => {
      console.info(`========> Live app stopped <=========`);
      resolve();
    });
  });
}
