import React, {useState, useMemo} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import Text from '../../elements/Text/Text';
import Button from '../../elements/Button/Button';
import * as S from './StyledLogin';
import Input from '../../elements/Input/Input';
import {NavigationType} from '../../../types/types';

type LoginComponentProps = {
  onSubmit(form: {email: string; senha: string}): void;
  isLoading: boolean;
} & NavigationType;

const LoginComponent = ({onSubmit}: LoginComponentProps) => {
  const [credentials, setCredentials] = useState({
    email: '',
    senha: '',
  });
  let timer: any;

  function debounce(
    value: any,
    credentialType: 'email' | 'senha',
    timeout: number,
  ) {
    clearTimeout(timer);
    timer = setTimeout(
      () =>
        setCredentials(oldValue => ({...oldValue, [credentialType]: value})),
      timeout,
    );
  }

  function handleSubmit() {
    if (!emailHasError && !passwordHasError) {
      onSubmit(credentials);
    }
  }

  const emailHasError = useMemo(() => {
    return !emailRegex.test(credentials.email);
  }, [credentials.email]);

  const passwordHasError = useMemo(() => {
    return credentials.senha.length < 8;
  }, [credentials.senha]);

  return (
    <S.Wrapper>
      <S.Content behavior="padding">
        <S.ImageStyled
          source={require('../../../assets/logo-datafarm.png')}
          width={100}
          height={80}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Text color="textSecondary" variant="large" bold>
              Login
            </Text>
            <S.Subtitle>Acesse o aplicativo</S.Subtitle>
            <S.Label>Email</S.Label>
            <Input
              onChangeText={e => debounce(e, 'email', 300)}
              hasError={emailHasError}
              errorMessage="email inválido"
            />
            <S.Label>Senha</S.Label>
            <Input
              onChangeText={e => debounce(e, 'senha', 300)}
              hasError={passwordHasError}
              errorMessage="Senha muito pequena"
            />
            <S.Buttonwrapper>
              <Button onPress={handleSubmit} title="Entrar" />
            </S.Buttonwrapper>
          </>
        </TouchableWithoutFeedback>
      </S.Content>
    </S.Wrapper>
  );
};

export default LoginComponent;

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
