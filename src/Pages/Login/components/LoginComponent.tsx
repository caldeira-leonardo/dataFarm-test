import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import Button from '@src/components/elements/Button/Button';
import * as S from './LoginStyled';
import Input from '@src/components/elements/Input/Input';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View} from 'react-native';
import {LoginComponentProps} from '../types/LoginTypes';
import Text from '@src/components/elements/Text/Text';

const LoginComponent = ({
  onSubmit,
  isLoading,
  connectionError,
}: LoginComponentProps) => {
  return (
    <S.Wrapper>
      <S.Content behavior="padding">
        <S.ImageStyled
          source={require('@src/assets/logo-datafarm.png')}
          width={100}
          height={80}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Formik
            // Os campos estão preenchidos pois a senha do aplicativo é
            // extensa, caso haja outro usuário o mesmo pode ser testado na
            // aplicação
            initialValues={{
              email: 'leob.caldeira@gmail.com',
              senha: 'GY2XuUYravUYX0yZ@m7Data@2023',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Email inválido')
                .required('Campo obrigatório'),
              senha: Yup.string()
                .min(8, 'Mínimo 8 caracteres')
                .required('Campo obrigatório'),
            })}
            onSubmit={values => {
              onSubmit(values);
            }}>
            {({handleChange, handleSubmit, values, errors}) => (
              <View>
                <Text color="textSecondary" variant="large" bold>
                  Login
                </Text>
                <S.Subtitle>Acesse o aplicativo</S.Subtitle>
                <S.Label>Email</S.Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  hasError={!!errors.email}
                  errorMessage={errors.email}
                />
                <S.Label>Senha</S.Label>
                <Input
                  value={values.senha}
                  onChangeText={handleChange('senha')}
                  hasError={!!errors.senha}
                  errorMessage={errors.senha}
                  type="password"
                />

                <S.Buttonwrapper>
                  <Button
                    onPress={() => handleSubmit()}
                    isLoading={isLoading}
                    title="Entrar"
                  />
                  {connectionError ? (
                    <Text color="error" bold>
                      Sem Acesso a internet
                    </Text>
                  ) : (
                    <></>
                  )}
                </S.Buttonwrapper>
              </View>
            )}
          </Formik>
        </TouchableWithoutFeedback>
      </S.Content>
    </S.Wrapper>
  );
};

export default LoginComponent;
