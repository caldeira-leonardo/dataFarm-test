import {Theme} from '../../../Theme/Theme';

export type TextProps = {
  color?: keyof typeof Theme.colors;
  onError?: boolean;
  children: React.ReactNode;
  variant?: VariantProps;
  bold?: boolean;
  captalize?: boolean;
} & import('react-native').TextProps;

type VariantProps = keyof typeof Theme.sizes;
