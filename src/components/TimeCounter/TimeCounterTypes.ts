export type TimeCounterProps = {
  onPress(newValue: number): void;
  value: number;
  onError?: boolean;
};
