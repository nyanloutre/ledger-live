import { spawn, exec, ChildProcessWithoutNullStreams } from "child_process";
import { log } from "@ledgerhq/logs";
import { DeviceModelId } from "@ledgerhq/devices";
import SpeculosTransportHttp from "@ledgerhq/hw-transport-node-speculos-http";
import SpeculosTransportWebsocket from "@ledgerhq/hw-transport-node-speculos";
import { getEnv } from "@ledgerhq/live-env";
import { delay } from "@ledgerhq/live-promise";
//import { Device } from "../../../apps/ledger-live-desktop/tests/utils/speculos";
import { getCryptoCurrencyById } from "@ledgerhq/live-common/currencies/index";
import { CryptoCurrency } from "@ledgerhq/types-cryptoassets";

export function setExchangeDependencies(dependencies: string[]) {
  specs["Exchange"].dependencies = dependencies;
}

export type Device = {
  transport: SpeculosTransport;
  id: string;
  appPath: string;
};

export type Specs = {
  [key: string]: Spec;
};

export type Spec = {
  currency?: CryptoCurrency;
  appQuery: {
    model: DeviceModelId;
    appName: string;
    appVersion: string;
  };
  /** @deprecated */
  dependency?: string;
  dependencies?: string[];
  onSpeculosDeviceCreated?: (device: Device) => Promise<void>;
};

export const specs: Specs = {
  Bitcoin: {
    currency: getCryptoCurrencyById("bitcoin"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Bitcoin",
      appVersion: "2.2.2",
    },
    dependency: "",
  },
  Ethereum: {
    currency: getCryptoCurrencyById("ethereum"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Ethereum",
      appVersion: "1.10.4",
    },
    dependency: "",
  },
  Ethereum_Holesky: {
    currency: getCryptoCurrencyById("ethereum_holesky"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Ethereum",
      appVersion: "1.10.4",
    },
    dependency: "",
  },
  Ethereum_Sepolia: {
    currency: getCryptoCurrencyById("ethereum_sepolia"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Ethereum",
      appVersion: "1.10.4",
    },
    dependency: "",
  },
  Ethereum_Classic: {
    currency: getCryptoCurrencyById("ethereum_classic"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Ethereum classic",
      appVersion: "1.10.4",
    },
    //dependency: "Ethereum",
    dependencies: ["Ethereum"],
  },
  Exchange: {
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Exchange",
      appVersion: "3.3.3",
    },
    dependencies: [],
  },
  Bitcoin_Testnet: {
    currency: getCryptoCurrencyById("bitcoin_testnet"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Bitcoin Test",
      appVersion: "2.2.2",
    },
    dependency: "",
  },
  Solana: {
    currency: getCryptoCurrencyById("solana"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Solana",
      appVersion: "1.4.1",
    },
    dependency: "",
  },
  Cardano: {
    currency: getCryptoCurrencyById("cardano"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "CardanoADA",
      appVersion: "6.1.2",
    },
    dependency: "",
  },
  Polkadot: {
    currency: getCryptoCurrencyById("polkadot"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Polkadot",
      appVersion: "100.0.5",
    },
    dependency: "",
  },
  Tron: {
    currency: getCryptoCurrencyById("tron"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Tron",
      appVersion: "0.5.0",
    },
    dependency: "",
  },
  Ripple: {
    currency: getCryptoCurrencyById("ripple"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "XRP",
      appVersion: "2.2.3",
    },
    dependency: "",
  },
  Stellar: {
    currency: getCryptoCurrencyById("stellar"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Stellar",
      appVersion: "5.0.3",
    },
    dependency: "",
  },
  Bitcoin_Cash: {
    currency: getCryptoCurrencyById("bitcoin_cash"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Bitcoin Cash",
      appVersion: "2.4.1",
    },
    dependency: "",
  },
  Algorand: {
    currency: getCryptoCurrencyById("algorand"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Algorand",
      appVersion: "2.1.11",
    },
    dependency: "",
  },
  Cosmos: {
    currency: getCryptoCurrencyById("cosmos"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Cosmos",
      appVersion: "2.35.22",
    },
    dependency: "",
  },
  Tezos: {
    currency: getCryptoCurrencyById("tezos"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "TezosWallet",
      appVersion: "2.4.5",
    },
    dependency: "",
  },
  Polygon: {
    currency: getCryptoCurrencyById("polygon"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Polygon",
      appVersion: "1.10.4",
    },
    dependency: "",
  },
  Binance_Smart_Chain: {
    currency: getCryptoCurrencyById("bsc"),
    appQuery: {
      model: DeviceModelId.nanoSP,
      appName: "Binance Smart Chain",
      appVersion: "1.10.4",
    },
    dependency: "",
  },
};

export type SpeculosDevice = {
  transport: SpeculosTransport;
  id: string;
  appPath: string;
  ports: ReturnType<typeof getPorts>;
};

export type SpeculosTransport = SpeculosTransportHttp | SpeculosTransportWebsocket;

export { DeviceModelId };

export type SpeculosDeviceInternal =
  | {
      process: ChildProcessWithoutNullStreams;
      apduPort: number;
      buttonPort: number;
      automationPort: number;
      transport: SpeculosTransportWebsocket;
      destroy: () => void;
    }
  | {
      process: ChildProcessWithoutNullStreams;
      apiPort: string | undefined;
      transport: SpeculosTransportHttp;
      destroy: () => void;
    };

// FIXME we need to figure out a better system, using a filesystem file?
let idCounter: number;
const isSpeculosWebsocket = getEnv("SPECULOS_USE_WEBSOCKET");
const data: Record<string, SpeculosDeviceInternal | undefined> = {};

export function getMemorySpeculosDeviceInternal(id: string): SpeculosDeviceInternal | undefined {
  return data[id];
}

export const modelMap: Record<string, DeviceModelId> = {
  nanos: DeviceModelId.nanoS,
  "nanos+": DeviceModelId.nanoSP,
  nanox: DeviceModelId.nanoX,
  blue: DeviceModelId.blue,
};

const reverseModelMap: Record<string, string> = {};
for (const k in modelMap) {
  reverseModelMap[modelMap[k]] = k;
}
/**
 * Release a speculos device
 */
export async function releaseSpeculosDevice(id: string) {
  log("speculos", "release " + id);
  const obj = data[id];

  if (obj) {
    obj.destroy();
  }
}

/**
 * Close all speculos devices
 */
export function closeAllSpeculosDevices() {
  return Promise.all(Object.keys(data).map(releaseSpeculosDevice));
}

// to keep in sync from https://github.com/LedgerHQ/speculos/tree/master/speculos/cxlib
const existingSdks = [
  "nanos-cx-2.0.elf",
  "nanos-cx-2.1.elf",
  "nanosp-cx-1.0.3.elf",
  "nanosp-cx-1.0.elf",
  "nanox-cx-2.0.2.elf",
  "nanox-cx-2.0.elf",
];

function inferSDK(firmware: string, model: string): string | undefined {
  const begin = `${model.toLowerCase()}-cx-`;
  if (existingSdks.includes(begin + firmware + ".elf")) return firmware;
  const shortVersion = firmware.slice(0, 3);
  if (existingSdks.includes(begin + shortVersion + ".elf")) return shortVersion;
}

const getPorts = (idCounter: number, isSpeculosWebsocket?: boolean) => {
  if (isSpeculosWebsocket) {
    const apduPort = 30000 + idCounter;
    const vncPort = 35000 + idCounter;
    const buttonPort = 40000 + idCounter;
    const automationPort = 45000 + idCounter;

    return { apduPort, vncPort, buttonPort, automationPort };
  } else {
    const apiPort = 30000 + idCounter;
    const vncPort = 35000 + idCounter;

    return { apiPort, vncPort };
  }
};

function conventionalAppSubpath(
  model: DeviceModelId,
  firmware: string,
  appName: string,
  appVersion: string,
) {
  return `${reverseModelMap[model]}/${firmware}/${appName.replace(/ /g, "")}/app_${appVersion}.elf`;
}

/**
 * instanciate a speculos device that runs through docker
 */
export async function createSpeculosDevice(
  arg: {
    model: DeviceModelId;
    firmware: string;
    appName: string;
    appVersion: string;
    dependency?: string;
    dependencies?: string[];
    seed: string;
    // Root folder from which you need to lookup app binaries
    coinapps: string;
    // if you want to force a specific app path
    overridesAppPath?: string;
    onSpeculosDeviceCreated?: (device: SpeculosDevice) => Promise<void>;
  },
  maxRetry = 3,
): Promise<SpeculosDevice> {
  const {
    overridesAppPath,
    model,
    firmware,
    appName,
    appVersion,
    seed,
    coinapps,
    dependency,
    dependencies,
  } = arg;
  idCounter = idCounter ?? getEnv("SPECULOS_PID_OFFSET");
  const speculosID = `speculosID-${++idCounter}`;
  const ports = getPorts(idCounter, isSpeculosWebsocket);
  const sdk = inferSDK(firmware, model);

  const subpath = overridesAppPath || conventionalAppSubpath(model, firmware, appName, appVersion);
  const appPath = `./apps/${subpath}`;

  console.log("deps appversion :");
  console.log(dependencies !== undefined ? specs[dependencies[0]].appQuery.appVersion : "");
  const params = [
    "run",
    "-v",
    `${coinapps}:/speculos/apps`,
    ...(isSpeculosWebsocket
      ? [
          // websocket ports
          "-p",
          `${ports.apduPort}:40000`,
          "-p",
          `${ports.vncPort}:41000`,
          "-p",
          `${ports.buttonPort}:42000`,
          "-p",
          `${ports.automationPort}:43000`,
        ]
      : [
          // http ports
          "-p",
          `${ports.apiPort}:40000`,
          "-p",
          `${ports.vncPort}:41000`,
        ]),
    "-e",
    `SPECULOS_APPNAME=${appName}:${appVersion}`,
    "--name",
    `${speculosID}`,
    process.env.SPECULOS_IMAGE_TAG ?? "ghcr.io/ledgerhq/speculos:sha-e262a0c",
    "--model",
    model.toLowerCase(),
    appPath,
    ...(dependency
      ? [
          "-l",
          `${dependency}:./apps/${conventionalAppSubpath(model, firmware, dependency, appVersion)}`,
        ]
      : []),
    ...(dependencies !== undefined
      ? dependencies.flatMap(dependency => [
          "-l",
          //todo update appVersion for dependency appVersion
          //might need to retrieve dynamically from coin-apps repo or elsewhere
          `${dependency}:./apps/${conventionalAppSubpath(model, firmware, dependency,  specs[dependency].appQuery.appVersion)}`,
        ])
      : []),
    ...(sdk ? ["--sdk", sdk] : []),
    "--display",
    "headless",
    ...(process.env.CI ? ["--vnc-password", "live", "--vnc-port", "41000"] : []),
    ...(isSpeculosWebsocket
      ? [
          // websocket ports
          "--apdu-port",
          "40000",
          "--button-port",
          "42000",
          "--automation-port",
          "43000",
        ]
      : [
          // http ports
          "--api-port",
          "40000",
        ]),
  ];
  console.log("speculos", `${speculosID}: spawning = ${params.join(" ")}`);
  console.log("dependencies", `${dependencies}`);
  log("speculos", `${speculosID}: spawning = ${params.join(" ")}`);

  const p = spawn("docker", [...params, "--seed", `${seed}`]);

  let resolveReady: (value: boolean) => void;
  let rejectReady: (e: Error) => void;
  const ready = new Promise((resolve, reject) => {
    resolveReady = resolve;
    rejectReady = reject;
  });
  let destroyed = false;

  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    new Promise((resolve, reject) => {
      if (!data[speculosID]) return;
      delete data[speculosID];
      exec(`docker rm -f ${speculosID}`, (error, stdout, stderr) => {
        if (error) {
          log("speculos-error", `${speculosID} not destroyed ${error} ${stderr}`);
          reject(error);
        } else {
          log("speculos", `destroyed ${speculosID}`);
          resolve(undefined);
        }
      });
    });
  };

  p.stdout.on("data", data => {
    if (data) {
      log("speculos-stdout", `${speculosID}: ${String(data).trim()}`);
    }
  });
  let latestStderr: string | undefined;
  p.stderr.on("data", data => {
    if (!data) return;
    latestStderr = data;

    if (!data.includes("apdu: ")) {
      log("speculos-stderr", `${speculosID}: ${String(data).trim()}`);
    }

    if (/using\s(?:SDK|API_LEVEL)/.test(data)) {
      setTimeout(() => resolveReady(true), 500);
    } else if (data.includes("is already in use by container")) {
      rejectReady(
        new Error("speculos already in use! Try `ledger-live cleanSpeculos` or check logs"),
      );
    } else if (data.includes("address already in use")) {
      if (maxRetry > 0) {
        log("speculos", "retrying speculos connection");
        destroy();
        resolveReady(false);
      }
    }
  });
  p.on("close", () => {
    log("speculos", `${speculosID} closed`);

    if (!destroyed) {
      destroy();
      rejectReady(new Error(`speculos process failure. ${latestStderr || ""}`));
    }
  });
  const hasSucceed = await ready;

  if (!hasSucceed) {
    await delay(1000);
    return createSpeculosDevice(arg, maxRetry - 1);
  }

  let transport: SpeculosTransport;
  if (isSpeculosWebsocket) {
    transport = await SpeculosTransportWebsocket.open({
      apduPort: ports?.apduPort as number,
      buttonPort: ports?.buttonPort as number,
      automationPort: ports?.automationPort as number,
    });

    data[speculosID] = {
      process: p,
      apduPort: ports.apduPort as number,
      buttonPort: ports.buttonPort as number,
      automationPort: ports.automationPort as number,
      transport,
      destroy,
    };
  } else {
    transport = await SpeculosTransportHttp.open({
      apiPort: ports.apiPort?.toString(),
    });

    data[speculosID] = {
      process: p,
      apiPort: ports.apiPort?.toString(),
      transport,
      destroy,
    };
  }

  const device = {
    id: speculosID,
    transport,
    appPath,
    ports,
  };

  if (arg.onSpeculosDeviceCreated != null) {
    await arg.onSpeculosDeviceCreated(device);
  }

  return device;
}
