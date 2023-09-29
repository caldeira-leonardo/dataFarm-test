import React, {useCallback, useEffect, useState} from 'react';
import SyncDataComponent from '../components/SyncDataComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const SyncData = () => {
  const isFocused = useIsFocused();
  const [hasDataToFetch, setHasDataToFetch] = useState<any[]>([]);

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

  return <SyncDataComponent itens={hasDataToFetch} />;
};

export default SyncData;
