export type InputProps = {
  errorMessage?: string;
  hasError?: boolean;
  type?: 'password' | 'text';
} & import('react-native').TextInputProps;