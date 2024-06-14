import { useLiveAuthenticate, useTrustchainSdk } from "../../useTrustchainSdk";
import { useDispatch, useSelector } from "react-redux";
import { trustchainSelector, memberCredentialsSelector } from "@ledgerhq/trustchain/store";
import { useMutation } from "@tanstack/react-query";
import { JWT } from "@ledgerhq/trustchain/types";
import { setFlow } from "~/renderer/actions/walletSync";
import { Flow, Step } from "~/renderer/reducers/walletSync";

export function useDeleteData() {
  const dispatch = useDispatch();
  const sdk = useTrustchainSdk();
  const trustchain = useSelector(trustchainSelector);
  const memberCredentials = useSelector(memberCredentialsSelector);

  if (!trustchain || !memberCredentials) {
    throw new Error("trustchain or memberCredentials is missing");
  }

  const { liveJWT } = useLiveAuthenticate();

  const deleteMutation = useMutation({
    mutationFn: () => sdk.destroyTrustchain(trustchain, liveJWT as JWT),
    mutationKey: ["deleteTrustchain", trustchain, liveJWT],
    onSuccess: () => dispatch(setFlow({ flow: Flow.ManageBackups, step: Step.BackupDeleted })),
    onError: () => dispatch(setFlow({ flow: Flow.ManageBackups, step: Step.BackupDeletionError })),
  });

  return { deleteMutation };
}
