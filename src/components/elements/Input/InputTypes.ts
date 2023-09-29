export type InputProps = {
  errorMessage?: string;
  hasError?: boolean;
  type?: 'password' | 'text';
  value?: string | number;
} & import('react-native').TextInputProps;
