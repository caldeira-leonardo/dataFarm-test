import {NavigationType} from '@src/Types/types';

export type LoginProps = {};

export type LoginComponentProps = {
  onSubmit(form: {email: string; senha: string}): void;
  isLoading: boolean;
  connectionError: boolean;
} & NavigationType;
