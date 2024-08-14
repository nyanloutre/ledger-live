export type CosmosAddress = {
  publicKey: string;
  address: string;
};
// export type CosmosSignature = string;

export type CosmosSignature = {
    signature: null | Buffer;
    return_code: number | string;
};
export interface CosmosSigner {
  getAddress(path: string, hrp: string, boolDisplay?: boolean): Promise<CosmosAddress>;
  sign(path: string, message: string): Promise<CosmosSignature>;
}
