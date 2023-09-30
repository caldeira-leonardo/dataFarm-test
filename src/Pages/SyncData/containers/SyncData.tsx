import React, {useCallback, useEffect, useState} from 'react';
import SyncDataComponent from '../components/SyncDataComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

const SyncData = () => {
  const isFocused = useIsFocused();
  const [hasDataToFetch, setHasDataToFetch] = useState<any[]>([]);
  const [internetConnection, setInternetConnection] = useState(false);

  const searchDataToFetch = useCallback(async () => {
    const dataToFetch = await AsyncStorage.getItem('dataToFetch');

    if (dataToFetch !== null) {
      setHasDataToFetch(JSON.parse(dataToFetch));
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      searchDataToFetch();
    }
  }, [searchDataToFetch, isFocused]);

  useEffect(() => {
    if (hasDataToFetch) {
      console.log('Enviar dados para o backend'); // remove logs
    }
  }, [hasDataToFetch]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if (state.isConnected !== null) {
        setInternetConnection(state.isConnected);
      }
    });

    return unsubscribe();
  }, []);

  return <SyncDataComponent hasInternet={internetConnection} />;
};

export default SyncData;
