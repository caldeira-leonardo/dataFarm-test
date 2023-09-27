import {NavigationType} from '../../../types/types';

export type LoginProps = {};

export type LoginComponentProps = {
  onSubmit(form: {email: string; senha: string}): void;
  isLoading: boolean;
} & NavigationType;
