import Eth from "./src/Eth";
import TransportNodeHid from "../hw-transport-node-hid/src/TransportNodeHid";
import TransportSpeculos from "../hw-transport-node-speculos-http/src/SpeculosHttpTransport";
import { ethers } from "ethers";

const tests = {
  "wrapEth->v2:weth->shido":
    "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000654beab700000000000000000000000000000000000000000000000000000000000000020b080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000006c18930d962b1900e900000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000072c60bfffef18dca51db32b52b819a951b6ddbed",
  "v2:biden->weth->unwrapEth":
    "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000665f1abb000000000000000000000000000000000000000000000000000000000000000308060c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000012309ce54000000000000000000000000000000000000000000000000000010a0713832e6b3800000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c548e90589b166e1364de744e6d35d8748996fe8000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000060000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000fee13a103a10d593b9ae06b3e05f2e7e1c00000000000000000000000000000000000000000000000000000000000000190000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000001095cd18b2c61fc",
  "wrapEth->v2:weth-frog->sweep":
    "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000665f1abb00000000000000000000000000000000000000000000000000000000000000040b080604000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000b1a2bc2ec500000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000b1a2bc2ec500000000000000000000000000000000000000000000000000000c9f270e2c80dc9f00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000a2c375553e6965b42c135bb8b15a8914b08de0c00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000a2c375553e6965b42c135bb8b15a8914b08de0c000000000000000000000000000000fee13a103a10d593b9ae06b3e05f2e7e1c000000000000000000000000000000000000000000000000000000000000001900000000000000000000000000000000000000000000000000000000000000600000000000000000000000000a2c375553e6965b42c135bb8b15a8914b08de0c00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000c97131e236e9ea0",
  "v2:usdt->weth->ords->transfer->sweep":
    "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000665f1a73000000000000000000000000000000000000000000000000000000000000000309050400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000220000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000d961edda1c04680000000000000000000000000000000000000000000000000000000000000d9a07a600000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000008ab2ff0116a279a99950c66a12298962d152b83c00000000000000000000000000000000000000000000000000000000000000600000000000000000000000008ab2ff0116a279a99950c66a12298962d152b83c000000000000000000000000000000fee13a103a10d593b9ae06b3e05f2e7e1c0000000000000000000000000000000000000000000000008ac7230489e8000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000008ab2ff0116a279a99950c66a12298962d152b83c00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000d8d726b7177a800000",
  "permit2->v2:spct->weth":
    "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000661368a700000000000000000000000000000000000000000000000000000000000000020a080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000016000000000000000000000000002020595e6a34a03a8e9c1f5624b1b7713810083000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000663af45d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000003fc91a3afd70395cd496c647d5a6cc9d4b2b7fad0000000000000000000000000000000000000000000000000000000066136e6500000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000004140dd43b444c609de532ad2372b81b879e2c725f4135ae05d23a7f28027206a4872ba4eb4ab487b234fe945eb24449d22b66b75a532f5612a4f8fea3105dafab81b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000c78e8dfc72801d14cd3000000000000000000000000000000000000000000000000066097725904053200000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000002020595e6a34a03a8e9c1f5624b1b7713810083000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  "permit2->v3_in:love->weth->unwrapEth":
    "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000006475896b00000000000000000000000000000000000000000000000000000000000000030a000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000b22c05cedbf879a661fcc566b5a759d005cf7b4c000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000649d0e9b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ef1c6e67703c7bd7107eed8303fbe6ec2554bf6b00000000000000000000000000000000000000000000000000000000647588a300000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000041ee0ea2b20dec21a54e96825c52cc9d8126417e6c507b3783a28e3032cac189b004d089db5c29f9cf37692efe75d86fc1158af4374ea3e946b7a7ac5b824948051c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000003635c9adc5dea00000000000000000000000000000000000000000000000000000009e87364e7d176700000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002bb22c05cedbf879a661fcc566b5a759d005cf7b4c002710c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000009e87364e7d1767",
  "v3_in:usdc->weth->rlb":
    "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000066c74373000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001200000000000000000000000008ae57a027c63fca8070d1bf38622321de8004c6700000000000000000000000000000000000000000000000000000000d80386e2000000000000000000000000000000000000000000000be9414d271b8c00000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000042a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480001f4c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000bb8046eee2cc3188071c02bfc1745a6b17c656e3f3d000000000000000000000000000000000000000000000000000000000000",
  "permit2->v2:hashAI->weth->payPortion->unwrapEth":
    "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000018feea4034200000000000000000000000000000000000000000000000000000000000000040a08060c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000003a00000000000000000000000000000000000000000000000000000000000000160000000000000000000000000292fcdd1b104de5a00250febba9bc6a5092a0076000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000006689870d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000003fc91a3afd70395cd496c647d5a6cc9d4b2b7fad000000000000000000000000000000000000000000000000000000006662011500000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000415b72fa8262637a8982d525e7f44a301e2ed668aab6c07de32e483c21bd3147fb542d888a732d99ab5b1fcc2f387dff733bb17a4c6c7e7d291a75d0a91fe94bf61b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000106ef10c98e644d580000000000000000000000000000000000000000000000000000050275b13bdfe0fb00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000292fcdd1b104de5a00250febba9bc6a5092a0076000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000060000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000fee13a103a10d593b9ae06b3e05f2e7e1c00000000000000000000000000000000000000000000000000000000000000190000000000000000000000000000000000000000000000000000000000000040000000000000000000000000f7029aa999be4e1c5e5f5568434a53604a4d2a8600000000000000000000000000000000000000000000000004ff40eb07e284e60b",
};

(async () => {
  const tx = {
    to: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",
    data: tests["permit2->v2:hashAI->weth->payPortion->unwrapEth"] || (new Error() as any),
    chainId: 1,
    gasLimit: ethers.BigNumber.from("100000"),
    gasPrice: ethers.BigNumber.from("1000000000"),
    nonce: 0,
    value: ethers.BigNumber.from("0"),
  };
  // const tx = {
  //   chainId: 1,
  //   to: "0x253553366Da8546fC250F225fe3d25d0C782303b",
  //   amount: ethers.BigNumber.from("0x4cd250097566c"),
  //   data: "0xacf1a84100000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000001e133800000000000000000000000000000000000000000000000000000000000000005743072657a000000000000000000000000000000000000000000000000000000",
  //   gasLimit: ethers.BigNumber.from("0x254fd"),
  //   maxFeePerGas: ethers.BigNumber.from("0x3b9aca000"),
  //   maxPriorityFeePerGas: ethers.BigNumber.from("0x3b9aca000"),
  //   nonce: 0,
  //   type: 2,
  // };

  const serialized = ethers.utils.serializeTransaction(tx);
  // const transport = await TransportNodeHid.create();
  const transport = await TransportSpeculos.open({ apiPort: "5000" });
  const eth = new Eth(transport);

  const res = await eth.signTransaction("44'/60'/0'/0/0", serialized.slice(2));

  console.log(res);
})();
