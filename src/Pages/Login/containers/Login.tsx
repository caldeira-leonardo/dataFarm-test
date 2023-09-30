import React, {useCallback, useEffect, useState} from 'react';
import LoginComponent from '../components/LoginComponent';
import {useUser} from '../../../Context/userContext';
import {useNavigation} from '../../../Context/navigationContext';
import {LoginProps} from '../types/LoginTypes';
import {LoginService} from '../../../Services/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getResourcesService} from '../../../Services/Resources';

const Login = (props: LoginProps) => {
  const navigation = useNavigation();
  const {updateUserToken, user, hasInternet} = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);

  async function onSubmit(data: {email: string; senha: string}) {
    if (hasInternet === true) {
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
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      setConnectionError(true);
    }
  }

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
  }

  const verifyLogin = useCallback(async () => {
    if (hasInternet === true) {
      if (!user?.token) {
        try {
          setIsLoading(false);
          const keepLogin = await AsyncStorage.getItem('keepLoguedIn');
          const token = await AsyncStorage.getItem('token');

          if (token !== null) {
            updateUserToken(JSON.parse(token));

            if (keepLogin !== null && JSON.parse(keepLogin) === true) {
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
    } else {
      setConnectionError(true);
      setIsLoading(false);
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
