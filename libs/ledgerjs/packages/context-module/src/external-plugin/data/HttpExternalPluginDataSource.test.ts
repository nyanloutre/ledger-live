import axios from "axios";
import { HttpExternalPluginDataSource } from "./HttpExternalPluginDataSource";
import { Abis, B2c, B2cSignatures, DappDTO } from "./DappDTO";
import ABI from "../__tests__/abi.json";

jest.mock("axios");

const axiosResponseBuilder = (dappDTO: Partial<DappDTO>[]) => {
  return { data: dappDTO };
};

describe("HttpExternalPuginDataSource", () => {
  const exampleB2c: B2c = {
    blockchainName: "ethereum",
    chainId: 1,
    contracts: [
      {
        address: "0x0",
        contractName: "name",
        selectors: { "0x01": { erc20OfInterest: ["fromToken"], method: "swap", plugin: "plugin" } },
      },
    ],
    name: "test",
  };
  const exampleAbis: Abis = { "0x0": ABI };
  const exampleB2cSignatures: B2cSignatures = {
    "0x0": { "0x01": { plugin: "plugin", serialized_data: "0x001", signature: "0x002" } },
  };

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it("should return undefined when no b2c data", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const response = axiosResponseBuilder([]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no abis is undefined", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const response = axiosResponseBuilder([
      { b2c: exampleB2c, b2c_signatures: exampleB2cSignatures },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no abis data", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const response = axiosResponseBuilder([
      { abis: {}, b2c: exampleB2c, b2c_signatures: exampleB2cSignatures },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no abis data for the contract address", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const abis: Abis = { "0x1": ABI };
    const response = axiosResponseBuilder([
      { abis, b2c: exampleB2c, b2c_signatures: exampleB2cSignatures },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no b2c signature", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const response = axiosResponseBuilder([{ b2c: exampleB2c, abis: exampleAbis }]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no ecc20OfInterest", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const b2c = {
      blockchainName: "ethereum",
      chainId: 1,
      contracts: [
        {
          address: "0x0",
          contractName: "name",
          selectors: {
            "0x01": { method: "swap", plugin: "plugin" },
          },
        },
      ],
      name: "test",
    } as unknown as B2c;
    const response = axiosResponseBuilder([
      { b2c, abis: exampleAbis, b2c_signatures: exampleB2cSignatures },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no method", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const b2c = {
      blockchainName: "ethereum",
      chainId: 1,
      contracts: [
        {
          address: "0x0",
          contractName: "name",
          selectors: {
            "0x01": { erc20OfInterest: ["fromToken"], plugin: "plugin" },
          },
        },
      ],
      name: "test",
    } as unknown as B2c;
    const response = axiosResponseBuilder([
      { b2c, abis: exampleAbis, b2c_signatures: exampleB2cSignatures },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no plugin", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const b2c = {
      blockchainName: "ethereum",
      chainId: 1,
      contracts: [
        {
          address: "0x0",
          contractName: "name",
          selectors: {
            "0x01": { erc20OfInterest: ["fromToken"], method: "swap" },
          },
        },
      ],
      name: "test",
    } as unknown as B2c;
    const response = axiosResponseBuilder([
      { b2c, abis: exampleAbis, b2c_signatures: exampleB2cSignatures },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no method", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const b2c = {
      blockchainName: "ethereum",
      chainId: 1,
      contracts: [
        {
          address: "0x0",
          contractName: "name",
          selectors: {
            "0x01": { erc20OfInterest: ["fromToken"], plugin: "plugin" },
          },
        },
      ],
      name: "test",
    } as unknown as B2c;
    const response = axiosResponseBuilder([
      { b2c, abis: exampleAbis, b2c_signatures: exampleB2cSignatures },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no signature", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const B2CSignature = {
      "0x0": { "0x01": { plugin: "plugin", serialized_data: "0x001" } },
    } as unknown as B2cSignatures;

    // FIXME
    const response = axiosResponseBuilder([
      { b2c: exampleB2c, abis: exampleAbis, b2c_signatures: B2CSignature },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return undefined when no serialized data", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const B2CSignature = {
      "0x0": { "0x01": { plugin: "plugin", signature: "0x002" } },
    } as unknown as B2cSignatures;

    // FIXME
    const response = axiosResponseBuilder([
      { b2c: exampleB2c, abis: exampleAbis, b2c_signatures: B2CSignature },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual(undefined);
  });

  it("should return a correct response", async () => {
    // GIVEN
    const datasource = new HttpExternalPluginDataSource();
    const response = axiosResponseBuilder([
      { b2c: exampleB2c, abis: exampleAbis, b2c_signatures: exampleB2cSignatures },
    ]);
    jest.spyOn(axios, "request").mockResolvedValue(response);

    // WHEN
    const result = await datasource.getDappInfos({ chainId: 1, address: "0x0", selector: "0x01" });

    // THEN
    expect(result).toEqual({
      abi: ABI,
      selectorDetails: {
        erc20OfInterest: ["fromToken"],
        method: "swap",
        plugin: "plugin",
        serializedData: "0x001",
        signature: "0x002",
      },
    });
  });
});
