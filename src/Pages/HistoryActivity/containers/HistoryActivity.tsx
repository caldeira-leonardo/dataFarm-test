import React, {useCallback, useEffect, useState} from 'react';
import HistoryActivityComponent from '../components/HistoryActivityComponent';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HystoryDataProps} from '../Types/HistoryActivityTypes';

const HistoryActivity = () => {
  const isFocused = useIsFocused();
  const [dataToShow, setDataToShow] = useState<HystoryDataProps[]>([]);

  const getUserHistoryData = useCallback(async () => {
    const userHystoryData: any = await AsyncStorage.getItem('recordHistory');

    if (userHystoryData !== null) {
      const historyData = JSON.parse(userHystoryData);

      setDataToShow(historyData);
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      getUserHistoryData();
    }
  }, [getUserHistoryData, isFocused]);

  return <HistoryActivityComponent {...{dataToShow}} />;
};

export default HistoryActivity;
