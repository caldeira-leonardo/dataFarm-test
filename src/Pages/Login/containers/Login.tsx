import React, {useCallback, useEffect, useState} from 'react';
import LoginComponent from '../components/LoginComponent';
import {useUser} from '../../../Context/userContext';
import {useNavigation} from '../../../Context/navigationContext';
import {LoginProps} from '../types/LoginTypes';
import {LoginService} from '../../../Services/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props: LoginProps) => {
  const navigation = useNavigation();
  const {updateUserToken, user} = useUser();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: {email: string; senha: string}) {
    try {
      setIsLoading(true);
      const resp = await LoginService({...data, idPartner: 372});

      updateUserToken(resp.data.token);

      AsyncStorage.setItem('token', JSON.stringify(resp.data.token));
      AsyncStorage.setItem('keepLoguedIn', JSON.stringify(true));

      setIsLoading(false);

      navigation?.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
    } catch (e) {
      console.log('error updating', e);
    } finally {
    }
  }

  const verifyLogin = useCallback(async () => {
    if (!user?.token) {
      try {
        setIsLoading(false);
        const keepLogin = await AsyncStorage.getItem('keepLoguedIn');
        const token = await AsyncStorage.getItem('token');

        if (token !== null) {
          updateUserToken(JSON.parse(token));
        }
        if (keepLogin !== null && JSON.parse(keepLogin) === true) {
          navigation?.reset({
            index: 0,
            routes: [{name: 'Main'}],
          });
        }
      } catch (e) {
        console.log('error updating', e);
      } finally {
        setIsLoading(false);
      }
    }
  }, [navigation, updateUserToken, user]);

  useEffect(() => {
    verifyLogin();
  }, [verifyLogin]);

  return <LoginComponent {...props} {...{onSubmit, isLoading}} />;
};

export default Login;
