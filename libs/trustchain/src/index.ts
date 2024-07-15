import { SDK } from "./sdk";
import { MockSDK } from "./mockSdk";
import { TrustchainSDKContext, TrustchainSDK } from "./types";

/**
 * Get an implementation of a TrustchainSDK
 */
export const getSdk = (isMockEnv: boolean, context: TrustchainSDKContext): TrustchainSDK =>
  // TODO use pass a HWDeviceProvider to the SDK here
  isMockEnv ? new MockSDK(context) : new SDK(context);
