export type TimeCounterProps = {
  onPress(newValue: number): void;
  value: number;
  onError?: boolean;
};

export type CounterProps = {
  isLoading?: boolean;
} & import('react-native').ViewProps;
