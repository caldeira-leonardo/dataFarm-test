import React, {useCallback, useEffect, useState} from 'react';
import SyncDataComponent from '../components/SyncDataComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const SyncData = () => {
  const isFocused = useIsFocused();
  const [hasDataToFetch, setHasDataToFetch] = useState<any[]>([]);
  const searchDataToFetch = useCallback(async () => {
    const dataToFetch = await AsyncStorage.getItem('dataToFetch');

    console.log('dataToFetch', dataToFetch); // remove logs
    if (dataToFetch !== null) {
      console.log('dataToFetch', dataToFetch); // remove logs
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
      //fetch data
      console.log('hasDataToFetch', hasDataToFetch); // remove logs
    }
  }, [hasDataToFetch]);

  return <SyncDataComponent itens={hasDataToFetch} />;
};

export default SyncData;
