import { utils, Transaction } from "ethers";
import { byContractAddressAndChainId, findERC20SignaturesInfo } from "../../services/ledger/erc20";

const WETH9PerChainId = {
  // Ethereum Mainnet
  1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  // Ethereum Goerli
  5: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  // Ethereum Sepolia
  11155111: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
  // Arbitrum One
  42161: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  // Arbitrum Goerli
  421613: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
  // Avalanche C-Chain
  43114: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
  // BSC
  56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  // Base
  8453: "0x4200000000000000000000000000000000000006",
  // Base Goerli
  84531: "0x44D627f900da8AdaC7561bD73aA745F132450798",
  // Blast
  23888: "0x4300000000000000000000000000000000000004",
  // Celo
  42220: new Error("Celo isn't supporting wrapping Eth"),
  // Celo Alfajores
  44787: new Error("Celo Alfajores isn't supporting wrapping Eth"),
  // Optimism
  10: "0x4200000000000000000000000000000000000006",
  // Optimism Goerli
  420: "0x4200000000000000000000000000000000000006",
  // Polygon
  137: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  // Polygon Mumbai
  80001: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
};

type UniswapSupportedCommand =
  | "V2_SWAP_EXACT_IN"
  | "V2_SWAP_EXACT_OUT"
  | "V3_SWAP_EXACT_IN"
  | "V3_SWAP_EXACT_OUT"
  | "WRAP_ETH"
  | "UNWRAP_ETH"
  | "PERMIT2_PERMIT"
  | "PERMIT2_TRANSFER_FROM"
  | "PERMIT2_PERMIT_BATCH"
  | "PERMIT2_TRANSFER_FROM_BATCH"
  | "PAY_PORTION";

const UNISWAP_UNIVERSAL_ROUTER_ADDRESS = "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad";
const UNISWAP_EXECUTE_SELECTOR = "0x3593564c";

export const UniswapCommands: Record<`0x${string}`, UniswapSupportedCommand> = {
  "0x08": "V2_SWAP_EXACT_IN",
  "0x09": "V2_SWAP_EXACT_OUT",
  "0x00": "V3_SWAP_EXACT_IN",
  "0x01": "V3_SWAP_EXACT_OUT",
  "0x0b": "WRAP_ETH",
  "0x0c": "UNWRAP_ETH",
  "0x0a": "PERMIT2_PERMIT",
  "0x0d": "PERMIT2_TRANSFER_FROM",
  "0x02": "PERMIT2_PERMIT_BATCH",
  "0x03": "PERMIT2_TRANSFER_FROM_BATCH",
  "0x06": "PAY_PORTION",
};

const swapV2Decoder = (input: `0x${string}`): `0x${string}`[] => {
  const [, , , addresses] = utils.defaultAbiCoder.decode(
    ["address", "uint256", "uint256", "address[]", "bool"],
    input,
  );
  // console.log({ tokens: addresses });

  return addresses.map(address => address.toLowerCase());
};

const swapV3Decoder = (input: `0x${string}`): `0x${string}`[] => {
  const [, , , path] = utils.defaultAbiCoder.decode(
    ["address", "uint256", "uint256", "bytes", "bool"],
    input,
  );
  // Path is at least 43 bytes long for 2 times 20B addresses + 3B fee in between
  // Example for the pattern pattern: 20B address + 3B fee + 20B address
  // more addresses can be included after another 3B space
  const pathBuffer = Buffer.from(path.slice(2), "hex");

  const tokens: `0x${string}`[] = [];
  let i = 0;
  while (i < pathBuffer.length) {
    tokens.push(
      `0x${pathBuffer
        .subarray(i, i + 20)
        .toString("hex")
        .toLowerCase()}`,
    );
    // Skip 20B address + 3B fee
    i += 23;
  }

  return tokens;
};

const wrapEthDecoder = (input: `0x${string}`, chainId: number | string): `0x${string}`[] => {
  const contract = WETH9PerChainId[chainId];
  return contract instanceof Error ? [] : [contract.toLowerCase()];
};

const noDecoder = () => [];

const UniswapDecoders: Record<
  UniswapSupportedCommand,
  (input: `0x${string}`, chainId: number | string) => `0x${string}`[]
> = {
  V2_SWAP_EXACT_IN: swapV2Decoder,
  V2_SWAP_EXACT_OUT: swapV2Decoder,
  V3_SWAP_EXACT_IN: swapV3Decoder,
  V3_SWAP_EXACT_OUT: swapV3Decoder,
  WRAP_ETH: wrapEthDecoder,
  UNWRAP_ETH: wrapEthDecoder,
  PERMIT2_PERMIT: noDecoder,
  PERMIT2_TRANSFER_FROM: noDecoder,
  PERMIT2_PERMIT_BATCH: noDecoder,
  PERMIT2_TRANSFER_FROM_BATCH: noDecoder,
  PAY_PORTION: noDecoder,
};

export const getTokensFromUniswapCalldata = (
  calldata: `0x${string}`,
  chainId: number | string,
): `0x${string}`[] => {
  const [commands, inputs] = new utils.Interface([
    "function execute(bytes calldata commands, bytes[] calldata inputs, uint256 deadline) external payable",
  ]).decodeFunctionData("execute", calldata) as [`0x${string}`, `0x${string}`[]];
  const commandsBuffer = Buffer.from(commands.slice(2), "hex");

  const tokenAddresses = new Set<`0x${string}`>();
  for (let i = 0; i < commandsBuffer.length; i++) {
    const command = commandsBuffer.subarray(i, i + 1).toString("hex");
    const commandName = UniswapCommands[`0x${command}`];

    const commandDecoder = UniswapDecoders[commandName];

    if (commandDecoder) {
      commandDecoder(inputs[i], chainId).forEach(tokenAddress => tokenAddresses.add(tokenAddress));
    }
  }

  return Array.from(tokenAddresses);
};

export const loadInfosForUniswap = async (
  transaction: Transaction,
  chainIdTruncated: number,
): Promise<{ pluginData?: Buffer; tokenDescriptors?: Buffer[] }> => {
  const calldataSelector = transaction.data.slice(0, 10);
  if (
    calldataSelector.toLowerCase() !== UNISWAP_EXECUTE_SELECTOR ||
    transaction.to?.toLowerCase() !== UNISWAP_UNIVERSAL_ROUTER_ADDRESS
  ) {
    return {};
  }

  const tokens = getTokensFromUniswapCalldata(transaction.data as `0x${string}`, chainIdTruncated);
  const tokenDescriptors = (await Promise.all(
    tokens.map(async token => {
      const erc20SignaturesBlob = await findERC20SignaturesInfo({}, chainIdTruncated);
      return byContractAddressAndChainId(token, chainIdTruncated, erc20SignaturesBlob)?.data;
    }),
  ).then(descriptors => descriptors.filter(Boolean))) as Buffer[];

  if (tokenDescriptors.length) {
    const pluginName = "Uniswap";
    // 1 byte for the length of the plugin name
    const lengthBuff = Buffer.alloc(1);
    lengthBuff.writeUIntBE(pluginName.length, 0, 1);
    // dynamic length bytes for the plugin name
    const pluginNameBuff = Buffer.from(pluginName);
    // 20 bytes for the contract address
    const contractAddressBuff = Buffer.from(UNISWAP_UNIVERSAL_ROUTER_ADDRESS.slice(2), "hex");
    // 4 bytes for the selector
    const selectorBuff = Buffer.from(UNISWAP_EXECUTE_SELECTOR.slice(2), "hex");
    // 70 bytes for the signature
    const signature = Buffer.from(
      "3044022014391e8f355867a57fe88f6a5a4dbcb8bf8f888a9db3ff3449caf72d120396bd02200c13d9c3f79400fe0aa0434ac54d59b79503c9964a4abc3e8cd22763e0242935",
      "hex",
    );

    const pluginData = Buffer.concat([
      lengthBuff,
      pluginNameBuff,
      contractAddressBuff,
      selectorBuff,
      signature,
    ]);

    // console.log({ pluginData: pluginData.toString("hex") });

    return {
      pluginData,
      tokenDescriptors,
    };
  }

  return {};
};
