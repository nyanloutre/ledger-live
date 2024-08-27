export type CosmosAddress = {
  publicKey: string;
  address: string;
};

export type CosmosGetAddressAndPubKeyRes = {
  bech32_address: string;
  compressed_pk: string;
  return_code: number; // TODO: validate type
  error_message: string;
};

export type CosmosSignature = {
  signature: null | Buffer;
  return_code: number | string;
};

export type CosmosSignatureSdk = {
  signature: Uint8Array;
  return_code: number | string;
};

export interface CosmosSigner {
  // getAddressAndPubKey(path: string, hrp: string, boolDisplay?: boolean): Promise<CosmosAddress>;
  getAddressAndPubKey(
    path: number[],
    hrp: string,
    boolDisplay?: boolean,
  ): Promise<CosmosGetAddressAndPubKeyRes>;
  // getAddressAndPubKey(path: string, hrp: string, boolDisplay?: boolean): Promise<any>;
  sign(path: number[], buffer: Buffer, transactionType?: string): Promise<CosmosSignature>;
  // NOTE: explain this one, to support cosmos-like chains (hw-app-cosmos)
  getAddress(path: string, hrp: string, boolDisplay?: boolean): Promise<CosmosAddress>;
}
