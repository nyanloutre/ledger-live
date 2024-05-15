import { makeLRUCache, minutes } from "@ledgerhq/live-network/cache";
import { log } from "@ledgerhq/logs";
import { cached, Config, getChainAPI, queued } from "../api";
import { traced } from "../api/traced";
import { makeBridges } from "./bridge";
import { SignerContext } from "@ledgerhq/coin-framework/signer";
import { SolanaSigner } from "../signer";

const httpRequestLogger = (url: string, options: any) => {
  log("network", url, {
    method: options?.method,
    body: options?.body,
    params: options?.params,
  });
};

const getAPI = makeLRUCache(
  (config: Config) => Promise.resolve(traced(getChainAPI(config, httpRequestLogger))),
  config => config.endpoint,
  minutes(1000),
);

const getQueuedAPI = makeLRUCache(
  (config: Config) => getAPI(config).then(api => queued(api, 500)),
  config => config.endpoint,
  minutes(1000),
);

const getQueuedAndCachedAPI = makeLRUCache(
  (config: Config) => getQueuedAPI(config).then(cached),
  config => config.endpoint,
  minutes(1000),
);

export function createBridges(signerContext: SignerContext<SolanaSigner>) {
  return makeBridges({
    getAPI,
    getQueuedAPI,
    getQueuedAndCachedAPI,
    signerContext,
  });
}
