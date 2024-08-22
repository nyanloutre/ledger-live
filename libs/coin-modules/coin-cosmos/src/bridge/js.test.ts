import { CryptoCurrency } from "@ledgerhq/types-cryptoassets";
import { createBridges } from "./js";
jest.mock("../chain/chain");
import cryptoFactory from "../chain/chain";
jest.mock("../CosmosValidatorsManager");
import cosmosBase from "../chain/cosmosBase";
import { CurrencyBridge } from "@ledgerhq/types-live";
const mockedCryptoFactory = jest.mocked(cryptoFactory);

describe.skip("currencyBridge", () => {
  let currencyBridge: CurrencyBridge;
  describe("hydrate", () => {
    beforeEach(() => {
      // currencyBridge = createBridges()
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    const currencyMock = {} as CryptoCurrency;
    it("shouldn't update configuration if data is undefined", () => {
      currencyBridge.hydrate(undefined, currencyMock);
      expect(mockedCryptoFactory).not.toHaveBeenCalled();
    });

    it("shouldn't update configuration if data is not an object", () => {
      currencyBridge.hydrate("definitely not an object", currencyMock);
      expect(mockedCryptoFactory).not.toHaveBeenCalled();
    });

    it("should update configuration if data is an object", () => {
      const config = {
        lcd: "oldLcd",
        minGasPrice: 42,
        ledgerValidator: "oldAddress",
      };
      const newConfig = {
        lcd: "lcdUrl",
        minGasPrice: 1,
        ledgerValidator: "ledgerValidatorAddress",
      };
      mockedCryptoFactory.mockReturnValue(config as cosmosBase);
      currencyBridge.hydrate(
        {
          config: newConfig,
        },
        currencyMock,
      );
      expect(config).toMatchObject(newConfig);
    });
  });
});
