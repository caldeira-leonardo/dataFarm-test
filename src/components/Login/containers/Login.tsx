import React, {useState} from 'react';
import LoginComponent from '../components/LoginComponent';
import {LoginService} from '../../../Services/User';
import {useUser} from '../../../Context/userContext';
import {useNavigation} from '../../../Context/navigationContext';
import {LoginProps} from '../types/LoginTypes';

const Login = (props: LoginProps) => {
  const navigation = useNavigation();
  const {updateUserToken} = useUser();

  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(data: {email: string; senha: string}) {
    try {
      setIsLoading(true);
      const resp = await LoginService({...data, idPartner: 372});
      navigation?.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
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
