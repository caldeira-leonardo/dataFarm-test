import React, {useState} from 'react';
import LoginComponent from '../components/LoginComponent';
import {NavigationType} from '../../../types/types';
import {LoginService} from '../../../Services/User';

type LoginProps = {} & NavigationType;

const mockLogin = {
  email: 'leob.caldeira@gmail.com',
  senha: 'GY2XuUYravUYX0yZ@m7Data@2023',
  idPartner: 372,
};

const Login = (props: LoginProps) => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(data: {email: string; senha: string} = mockLogin) {
    console.log(
      '----------------------------------------------------------------------------------',
    ); // remove logs
    try {
      setIsLoading(true);
      const resp = await LoginService(data);
      console.log('resp', resp.data); // remove logs
    } catch (e) {
      console.log('error updating', e);
    } finally {
      setIsLoading(false);
    }

    console.log(
      '----------------------------------------------------------------------------------',
    ); // remove logs
    if (false) {
      navigation?.navigate('Teste');
    }
  }
  return <LoginComponent {...props} {...{onSubmit, isLoading}} />;
};

export default Login;
