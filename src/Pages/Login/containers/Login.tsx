import React, {useCallback, useEffect, useState} from 'react';
import LoginComponent from '../components/LoginComponent';
import {useUser} from '@src/Context/userContext';
import {useNavigation} from '@src/Context/navigationContext';
import {LoginProps} from '../types/LoginTypes';
import {LoginService} from '@src/Services/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getResourcesService} from '@src/Services/Resources';

const Login = (props: LoginProps) => {
  const navigation = useNavigation();
  const {updateUserToken, user, hasInternet} = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);

  async function getResources(token: string) {
    const res = await getResourcesService(token);
    if (res?.data) {
      const resources = {
        machineries: res.data.resources?.machineries,
        farms: res.data.resources?.farms,
        reasons: res.data.resources?.reasons,
      };
      await AsyncStorage.setItem('resources', JSON.stringify(resources));
    }
    setIsLoading(false);
  }

  async function onSubmit(data: {email: string; senha: string}) {
    if (hasInternet === true) {
      try {
        setIsLoading(true);
        const resp = await LoginService({...data, idPartner: 372});

        updateUserToken(resp.data.token);

        AsyncStorage.setItem('token', JSON.stringify(resp.data.token));
        AsyncStorage.setItem('keepLoguedIn', JSON.stringify(true));

        await getResources(resp.data.token);
        navigation?.reset({
          index: 0,
          routes: [{name: 'Main'}],
        });
      } catch (e) {
        console.log('error updating', e);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      setConnectionError(true);
    }
  }

  const verifyLogin = useCallback(async () => {
    if (hasInternet === true) {
      if (!user?.token) {
        setIsLoading(true);
        try {
          const keepLogin = await AsyncStorage.getItem('keepLoguedIn');
          if (keepLogin !== null && JSON.parse(keepLogin) === true) {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
              updateUserToken(JSON.parse(token));

              await getResources(JSON.parse(token));
              navigation?.reset({
                index: 0,
                routes: [{name: 'Main'}],
              });
            }
          }
        } catch (e) {
          console.log('error updating', e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  }, [navigation, updateUserToken, user, hasInternet]);

  useEffect(() => {
    verifyLogin();
  }, [verifyLogin]);

  return (
    <LoginComponent {...props} {...{onSubmit, isLoading, connectionError}} />
  );
};

export default Login;
