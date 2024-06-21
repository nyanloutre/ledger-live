/* eslint-disable @typescript-eslint/no-var-requires */
import { getEnv } from "@ledgerhq/live-env";

if (getEnv("PLAYWRIGHT_RUN")) {
  const timemachine = require("timemachine");
  timemachine.config({
    dateString: require("../tests/time").default,
  });
}

// catch exception in playwright test to avoid popup on deeplink in webview
process.env.PLAYWRIGHT_RUN &&
  process.on("uncaughtException", function (error) {
    console.error(error, "Uncaught Exception thrown");
  });

if (!process.env.IS_INTERNAL_PROCESS) {
  // Main electron thread
  require("./main");
} else {
  // Internal thread (coins, hardware)
  require("./internal");
}
