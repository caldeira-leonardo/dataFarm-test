import React, {useState} from 'react';
import LoginComponent from '../components/LoginComponent';
import {NavigationType} from '../../../types/types';
import {LoginService} from '../../../Services/User';
import {useUser} from '../../../Context/userContext';

type LoginProps = {} & NavigationType;

const Login = (props: LoginProps) => {
  const {updateUserToken} = useUser();
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(data: {email: string; senha: string}) {
    try {
      setIsLoading(true);
      const resp = await LoginService({...data, idPartner: 372});
      navigation?.navigate('Teste');
      console.log('resp', resp.data); // remove logs
      updateUserToken(resp.data.token);
    } catch (e) {
      console.log('error updating', e);
    } finally {
      setIsLoading(false);
    }
  }
  return <LoginComponent {...props} {...{onSubmit, isLoading}} />;
};

export default Login;
