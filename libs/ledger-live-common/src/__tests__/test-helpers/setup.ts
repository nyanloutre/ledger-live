import "./environment";
import BigNumber from "bignumber.js";
import { liveConfig } from "../../config/sharedConfig";
import { LiveConfig } from "@ledgerhq/live-config/LiveConfig";

LiveConfig.setConfig(liveConfig);
jest.setTimeout(360000);

expect.extend({
  toBeBigNumber(value) {
    const pass = BigNumber.isBigNumber(value);
    const message = pass ? () => `${value} is a BigNumber` : () => `${value} is not a BigNumber`;

    return { message, pass };
  },
});
