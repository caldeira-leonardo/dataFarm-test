export type SelectProps = {
  errorMessage?: string;
  hasError?: boolean;
  options: any[];
  handleChange(value: any): void;
  selectedValue?: string | number;
} & import('react-native').TextInputProps;

export type SepectProps = {
  options: ValueProps[];
  value: ValueProps;
  defaultValue?: ValueProps;
  searchOnOptions?: boolean;
  searchLabel?: string;
  placeholder?: string;
  onChangeValue(value: ValueProps): void;
  hasError?: boolean;
  errorMessage?: string;
};

export type ValueProps = {
  value?: string;
  key: number | string;
  subtitle?: string;
};
