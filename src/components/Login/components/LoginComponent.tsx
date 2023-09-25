import React from 'react';
import {Button} from 'react-native';
import {View} from 'react-native';
import Text from '../../elements/Text/Text';

type LoginComponentProps = {
  onSubmit(form: {email: string; password: string}): void;
};

const LoginComponent = ({onSubmit}: LoginComponentProps) => {
  function handleSubmit() {
    onSubmit({
      email: '',
      password: '',
    });
  }
  return (
    <View>
      <Text color="#00f">LoginComponent</Text>
      <Button onPress={handleSubmit} title="Login" />
    </View>
  );
};

export default LoginComponent;
