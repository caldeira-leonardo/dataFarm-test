import React, {useState} from 'react';
import LoginComponent from '../components/LoginComponent';
import {useUser} from '../../../Context/userContext';
import {useNavigation} from '../../../Context/navigationContext';
import {LoginProps} from '../types/LoginTypes';
import {LoginService} from '../../../Services/User';
import {useGeolocation} from '../../../Context/geolocationContext';

const Login = (props: LoginProps) => {
  const navigation = useNavigation();
  const {updateUserToken} = useUser();
  const {getUserGeolocation} = useGeolocation();

  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(data: {email: string; senha: string}) {
    try {
      setIsLoading(true);
      const resp = await LoginService({...data, idPartner: 372});
      navigation?.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
      const lala = await getUserGeolocation();
      console.log('lala', lala); // remove logs
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
