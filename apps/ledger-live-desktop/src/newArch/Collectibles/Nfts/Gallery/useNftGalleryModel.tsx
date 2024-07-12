import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { State } from "~/renderer/reducers";
import { accountSelector } from "~/renderer/reducers/accounts";
import { hiddenNftCollectionsSelector } from "~/renderer/reducers/settings";
import { useNftGalleryFilter, isThresholdValid } from "@ledgerhq/live-nft-react";
import { nftsByCollections } from "@ledgerhq/live-nft";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { openModal } from "~/renderer/actions/modals";
import { useOnScreen } from "LLD/Collectibles/utils/useOnScreen";
import useFeature from "@ledgerhq/live-common/featureFlags/useFeature";
import { ChainsEnum } from "../../types/Chains";

const useNftGalleryModel = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const nftsFromSimplehashFeature = useFeature("nftsFromSimplehash");
  const threshold = nftsFromSimplehashFeature?.params?.threshold;

  const listFooterRef = useRef<HTMLDivElement>(null);
  const [maxVisibleNFTs, setMaxVisibleNFTs] = useState(1);

  const { account, hiddenNftCollections } = useSelector((state: State) => ({
    account: accountSelector(state, { accountId: id }),
    hiddenNftCollections: hiddenNftCollectionsSelector(state),
  }));

  const { nfts, fetchNextPage, hasNextPage } = useNftGalleryFilter({
    nftsOwned: account?.nfts || [],
    addresses: account?.freshAddress || "",
    chains: [account?.currency.id ?? ChainsEnum.ETHEREUM],
    threshold: isThresholdValid(threshold) ? Number(threshold) : 75,
  });

  const collections = useMemo(() => {
    const allNfts = nftsFromSimplehashFeature?.enabled ? nfts : account?.nfts;
    return Object.entries(nftsByCollections(allNfts)).filter(
      ([contract]) => !hiddenNftCollections.includes(`${account?.id}|${contract}`),
    );
  }, [account?.id, account?.nfts, hiddenNftCollections, nfts, nftsFromSimplehashFeature?.enabled]);

  useEffect(() => {
    if (collections.length <= 0) {
      history.push(`/account/${account?.id}/`);
    }
  }, [account?.id, history, collections.length]);

  const onSend = useCallback(() => {
    dispatch(openModal("MODAL_SEND", { account, isNFTSend: true }));
  }, [dispatch, account]);

  const onSelectCollection = useCallback(
    (collectionAddress: string) => {
      history.push({
        pathname: `/account/${account?.id}/nft-collection/${collectionAddress}`,
      });
    },
    [account?.id, history],
  );

  const updateMaxVisibleNtfs = useCallback(() => {
    setMaxVisibleNFTs(prevMaxVisibleNFTs => prevMaxVisibleNFTs + 5);
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

  useOnScreen({
    enabled: maxVisibleNFTs < (account?.nfts?.length ?? 0),
    onIntersect: updateMaxVisibleNtfs,
    target: listFooterRef,
    threshold: 0.5,
  });

  const nftsByCollection = nfts.reduce(
    (acc, nft) => {
      const collectionKey = nft.contract || "-";
      if (!acc[collectionKey]) {
        acc[collectionKey] = [];
      }
      acc[collectionKey].push(nft);
      return acc;
    },
    {} as Record<string, typeof nfts>,
  );

  return { account, hiddenNftCollections, nftsByCollection, onSend, onSelectCollection };
};

export default useNftGalleryModel;
