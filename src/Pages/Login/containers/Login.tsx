import React, {useState} from 'react';
import LoginComponent from '../components/LoginComponent';
import {useUser} from '../../../Context/userContext';
import {useNavigation} from '../../../Context/navigationContext';
import {LoginProps} from '../types/LoginTypes';
import {LoginService} from '../../../Services/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      AsyncStorage.setItem('token', JSON.stringify(resp.data.token));
      AsyncStorage.setItem('keepLoguedIn', JSON.stringify(true));

      setIsLoading(false);
    } catch (e) {
      console.log('error updating', e);
    } finally {
    }
  }

  (async function verifyLogin() {
    try {
      const token = await AsyncStorage.getItem('token');
      const keepLogin = await AsyncStorage.getItem('keepLoguedIn');

      if (token !== null) {
        updateUserToken(token);
      }
      if (keepLogin !== null) {
        navigation?.reset({
          index: 0,
          routes: [{name: 'Main'}],
        });
      }
    } catch (e) {
      console.log('error updating', e);
    } finally {
    }
  })();
  console.log('aqui'); // remove logs

  return <LoginComponent {...props} {...{onSubmit, isLoading}} />;
};

export default Login;
