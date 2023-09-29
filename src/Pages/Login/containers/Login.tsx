import React, {useState} from 'react';
import LoginComponent from '../components/LoginComponent';
import {useUser} from '../../../Context/userContext';
import {useNavigation} from '../../../Context/navigationContext';
import {LoginProps} from '../types/LoginTypes';
import {LoginService} from '../../../Services/User';

const Login = (props: LoginProps) => {
  const navigation = useNavigation();
  const {updateUserToken} = useUser();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: {email: string; senha: string}) {
    try {
      setIsLoading(true);
      const resp = await LoginService({...data, idPartner: 372});

      updateUserToken(resp.data.token);

      navigation?.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
      setIsLoading(false);
    } catch (e) {
      console.log('error updating', e);
    } finally {
    }
  }

  return <LoginComponent {...props} {...{onSubmit, isLoading}} />;
};

export default Login;
