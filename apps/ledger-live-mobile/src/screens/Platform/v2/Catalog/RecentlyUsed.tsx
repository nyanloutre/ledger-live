import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { Flex, ScrollContainer, Text } from "@ledgerhq/native-ui";
import { RecentlyUsed as RecentlyUsedType } from "@ledgerhq/live-common/wallet-api/react";
import { AppIcon } from "../AppIcon";
import { Disclaimer } from "../hooks";

export function RecentlyUsed({
  recentlyUsed: { data, clear },
  disclaimer: { onSelect },
}: {
  recentlyUsed: Pick<RecentlyUsedType, "data" | "clear">;
  disclaimer: Pick<Disclaimer, "onSelect">;
}) {
  const { t } = useTranslation();

  return data.length > 0 ? (
    <>
      <Flex flexDirection="row" alignItems="center" paddingX={4}>
        <Flex flex={1} justifyContent="center">
          <Text variant={"h4"} fontWeight={"semiBold"}>
            {t("browseWeb3.catalog.section.recentlyUsed")}
          </Text>
        </Flex>

        <TouchableOpacity onPress={clear}>
          <Flex margin={4}>
            <Text color="primary.c80">{t("browseWeb3.catalog.section.clearAll")}</Text>
          </Flex>
        </TouchableOpacity>
      </Flex>

      <ScrollContainer paddingLeft={6} horizontal showsHorizontalScrollIndicator={false}>
        {data.map(manifest => (
          <TouchableOpacity
            key={`${manifest.id}.${manifest.branch}`}
            style={{
              width: 70,
              marginBottom: 16,
              marginRight: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => onSelect(manifest)}
          >
            <Flex marginBottom={4}>
              <AppIcon size={52} name={manifest.name} icon={manifest.icon} />
            </Flex>
            <Text numberOfLines={1}>{manifest.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollContainer>
    </>
  ) : null;
}
