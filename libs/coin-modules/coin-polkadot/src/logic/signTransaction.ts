import { TypeRegistry } from "@polkadot/types";
import { u8aConcat } from "@polkadot/util";
import { CoreTransasctionInfo } from "../types";
//import { ApiPromise, WsProvider } from "@polkadot/api";

/**
 * Serialize a signed transaction in a format that can be submitted over the
 * Node RPC Interface from the signing payload and signature produced by the
 * remote signer.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param signature - Signature of the signing payload produced by the remote signer.
 * @param registry - Registry used for constructing the payload.
 */
export const signExtrinsic = async (
  unsigned: CoreTransasctionInfo,
  signature: any,
  registry: TypeRegistry,
): Promise<string> => {
  //const metadata = registry.setMetadata(

  //console.log("local metadata", JSON.stringify(registry.metadata, null, 2));
  console.log("unsigned llllll: ", unsigned);
  const extrinsic = registry.createType("Extrinsic", unsigned, {
    version: unsigned.version,
  });
  console.log("human", extrinsic.toHuman());
  console.log("signature llllll: ", signature);
  const signedBuffer = Buffer.from(signature, "hex");
  extrinsic.addSignature(unsigned.address, signedBuffer, unsigned);
  console.log("bufferlength", signedBuffer.length);
  console.log("human", extrinsic.toHuman());
  console.log("signedTx to broadcast[human] " + JSON.stringify(extrinsic.toHuman(true)));
  console.log("signedTx toJson", JSON.stringify(extrinsic.toJSON()));
  return extrinsic.toHex();
};

/**
 * Sign Extrinsic with a fake signature (for fees estimation).
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param registry - Registry used for constructing the payload.
 */
export const fakeSignExtrinsic = async (
  unsigned: CoreTransasctionInfo,
  registry: TypeRegistry,
): Promise<string> => {
  const fakeSignature = u8aConcat(new Uint8Array([1]), new Uint8Array(64).fill(0x42));
  return signExtrinsic(unsigned, fakeSignature, registry);
};
