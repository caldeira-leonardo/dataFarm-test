export type SelectProps = {
  errorMessage?: string;
  hasError?: boolean;
  options: any[];
  handleChange(value: any): void;
  selectedValue?: string | number;
} & import('react-native').TextInputProps;
