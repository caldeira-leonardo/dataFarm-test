export type StopReadonWrapperProps = {
  isSelected: boolean;
} & import('react-native').TouchableOpacityProps;

export type StopReasonsProps = {
  children: React.ReactNode;
};

export type StopReasonsLineProps = {
  description: string;
  iconPath: string;
  id: string | number;
  isSelected: boolean;
  onPress(): void;
};

export type StopReasonsContentProps = {
  children: React.ReactNode;
};
