export type SelectProps = {
  errorMessage?: string;
  hasError?: boolean;
  options: SelectOption[];
  handleChange(value: SelectOption): void;
} & import('react-native').TextInputProps;

export type SelectOption = {
  label: string;
  value: string | number;
  key: string | number;
};
