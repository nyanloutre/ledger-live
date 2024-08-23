export type CosmosAddress = {
  publicKey: string;
  address: string;
};
// export type CosmosSignature = string;

export type CosmosSignature = {
  signature: null | Buffer;
  return_code: number | string;
};

export type CosmosSignatureSdk = {
  signature: Uint8Array;
  return_code: number | string;
};

// IF FOLLOWING WHAT'S IN THE DOC AND USING hw-app-cosmos
/*
export interface CosmosSigner {
  getAddress(path: string, hrp: string, boolDisplay?: boolean): Promise<CosmosAddress>;
  // sign(path: string, message: string): Promise<CosmosSignature>;
  sign(path: number[], buffer: Buffer, transactionType?:  number): Promise<CosmosSignatureSdk>;
  // NOTE: missing error_message from CosmosSignature https://github.com/Zondax/ledger-cosmos-js/blob/master/src/cosmosApp.ts
}
*/

// IF FOLLOWING WHAT'S IN "@zondax/ledger-cosmos-js
// https://github.com/Zondax/ledger-cosmos-js/blob/master/src/cosmosApp.ts
export interface CosmosSigner {
  // getAddressAndPubKey(path: string, hrp: string, boolDisplay?: boolean): Promise<CosmosAddress>;
  getAddressAndPubKey(path: number[], hrp: string, boolDisplay?: boolean): Promise<CosmosAddress>;
  // getAddressAndPubKey(path: string, hrp: string, boolDisplay?: boolean): Promise<any>;
  sign(path: number[], buffer: Buffer, transactionType?: string): Promise<CosmosSignature>;
}
