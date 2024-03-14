import { loadSync } from "protobufjs";

export type SwapProtobufPayload = {
  payinAddress: string;
  payinExtraId?: string;
  refundAddress: string;
  refundExtraId?: string;
  payoutAddress: string;
  payoutExtraId?: string;
  currencyFrom: string;
  currencyTo: string;
  amountToProvider: Buffer;
  amountToWallet: Buffer;
  message?: string;
  deviceTransactionId?: string;
  deviceTransactionIdNg?: Buffer;
};

export type SwapPayload = {
  payinAddress: string;
  payinExtraId?: string;
  refundAddress: string;
  refundExtraId?: string;
  payoutAddress: string;
  payoutExtraId?: string;
  currencyFrom: string;
  currencyTo: string;
  amountToProvider: number;
  amountToWallet: number;
  message?: string;
  deviceTransactionId?: string;
  deviceTransactionIdNg?: string;
};

export async function decodePayloadProtobuf(hexBinaryPayload: string): Promise<SwapPayload> {
  const buffer = Buffer.from(hexBinaryPayload, "hex");
  const protoFilePath = "protocol.proto";
  const root = loadSync(protoFilePath);
  const TransactionResponse = root.lookupType("ledger_swap.NewTransactionResponse");
  const err = TransactionResponse.verify(buffer);
  if (err) {
    throw Error(err);
  }
  const decodePayload = TransactionResponse.decode(buffer) as unknown as SwapProtobufPayload;
  const {
    amountToWallet: amountToWalletBuffer,
    amountToProvider: amountToProviderBuffer,
    deviceTransactionIdNg: deviceTransactionIdNgBuffer,
  } = decodePayload;
  const amountToWalletHexString = amountToWalletBuffer.toString("hex"); // Gets the hexadecimal representation from the Buffer
  const amountToWallet = parseInt(amountToWalletHexString, 16); // Convert hexadecimal representation to a decimal number

  const amountToProviderHexString = amountToProviderBuffer.toString("hex"); // Gets the hexadecimal representation from the Buffer
  const amountToProvider = parseInt(amountToProviderHexString, 16); // Convert hexadecimal representation to a decimal number

  const deviceTransactionIdNg = deviceTransactionIdNgBuffer?.toString("hex") || undefined;

  return { ...decodePayload, amountToWallet, amountToProvider, deviceTransactionIdNg };
}
