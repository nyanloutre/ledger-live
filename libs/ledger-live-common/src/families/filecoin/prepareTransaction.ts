import BigNumber from "bignumber.js";
import { AccountBridge } from "@ledgerhq/types-live";
import { defaultUpdateTransaction } from "@ledgerhq/coin-framework/bridge/jsHelpers";
import {
  isEthereumConvertableAddr,
  isFilEthAddress,
  validateAddress,
} from "./bridge/utils/addresses";
import { BroadcastBlockIncl } from "./bridge/utils/types";
import { Methods, calculateEstimatedFees } from "./utils";
import { fetchEstimatedFees } from "./bridge/utils/api";
import { getAddress, getSubAccount } from "./bridge/utils/utils";
import { Transaction } from "./types";
import { encodeTxnParams, generateTokenTxnParams } from "./bridge/utils/erc20/tokenAccounts";

export const prepareTransaction: AccountBridge<Transaction>["prepareTransaction"] = async (
  account,
  transaction,
) => {
  const { balance } = account;
  const { address } = getAddress(account);
  const { useAllAmount } = transaction;
  const recipient = transaction.recipient.toLowerCase();

  const subAccount = getSubAccount(account, transaction);
  const tokenAccountTxn = !!subAccount;

  if (recipient && address) {
    const recipientValidation = validateAddress(recipient);
    const senderValidation = validateAddress(address);

    if (recipientValidation.isValid && senderValidation.isValid) {
      const patch: Partial<Transaction> = {};

      const method =
        isFilEthAddress(recipientValidation.parsedAddress) || tokenAccountTxn
          ? Methods.InvokeEVM
          : Methods.Transfer;

      const validatedContractAddress = validateAddress(subAccount?.token.contractAddress ?? "");
      let finalRecipient = recipientValidation;
      let params: string | undefined = undefined;
      // used as fallback only for estimation of fees
      let fallbackParams: string = "";
      if (tokenAccountTxn && validatedContractAddress.isValid) {
        finalRecipient = validatedContractAddress;
        // If token transfer, the evm payload is required to estimate fees
        if (isEthereumConvertableAddr(recipientValidation.parsedAddress)) {
          params = generateTokenTxnParams(
            recipient,
            transaction.amount.isZero() ? BigNumber(1) : transaction.amount,
          );
        } else {
          fallbackParams = generateTokenTxnParams(subAccount.token.contractAddress, BigNumber(1));
        }
      }

      const paramsForEstimation = params ? params : fallbackParams;
      const result = await fetchEstimatedFees({
        to: finalRecipient.parsedAddress.toString(),
        from: senderValidation.parsedAddress.toString(),
        methodNum: method,
        blockIncl: BroadcastBlockIncl,
        params: tokenAccountTxn ? encodeTxnParams(paramsForEstimation) : undefined, // If token transfer, the eth call params are required to estimate fees
        value: tokenAccountTxn ? "0" : undefined, // If token transfer, the value should be 0 (avoid any native token transfer on fee estimation)
      });

      patch.gasFeeCap = new BigNumber(result.gas_fee_cap);
      patch.gasPremium = new BigNumber(result.gas_premium);
      patch.gasLimit = new BigNumber(result.gas_limit);
      patch.nonce = result.nonce;
      patch.method = method;
      patch.params = params;

      const fee = calculateEstimatedFees(patch.gasFeeCap, patch.gasLimit);
      if (useAllAmount) {
        patch.amount = subAccount ? subAccount.spendableBalance : balance.minus(fee);
        patch.params =
          tokenAccountTxn && params ? generateTokenTxnParams(recipient, patch.amount) : undefined;
      }

      return defaultUpdateTransaction(transaction, patch);
    }
  }

  return transaction;
};
