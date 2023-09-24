import React from 'react';
import LoginComponent from '../components/LoginComponent';
import {NavigationType} from '../../../types/types';

type LoginProps = {} & NavigationType;

const Login = ({navigation}: LoginProps) => {
  function onSubmit() {
    console.log('ON SUBMIT', navigation); // remove logs
    navigation?.navigate('Teste');
  }
  return <LoginComponent onSubmit={onSubmit} />;
};

export default Login;
