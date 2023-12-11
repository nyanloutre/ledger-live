import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export type ButtonAction = ComponentProps<typeof TouchableOpacity>["onPress"];

/**
 *
 */
export type ContentCardProps = {
  metadata: ContentCardMetadata;
};

/**
 *
 */
export type ContentCardMetadata = {
  id: string;

  actions?: {
    onView?: () => void;
    onClick?: ButtonAction;
    onDismiss?: ButtonAction;
  };
};

/**
 * Defines a content card item.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ContentCardItem<P extends ContentCardProps> {
  component: React.FC<P>;
  props: P;
}
