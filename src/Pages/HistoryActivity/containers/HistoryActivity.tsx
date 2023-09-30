import React, {useCallback, useEffect, useState} from 'react';
import HistoryActivityComponent from '../components/HistoryActivityComponent';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  HistoryDataProps,
  HistoryStorageDataProps,
} from '../Types/HistoryActivityTypes';
import {FarmsProps, ReasonsProps} from '../../StopRecord/Types/StopRecordTypes';
import uuid from 'react-native-uuid';
import {getUserResourceData} from '../../../Utils/getUserResources';

const HistoryActivity = () => {
  const isFocused = useIsFocused();
  const [dataToShow, setDataToShow] = useState<HistoryDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserHistoryData = useCallback(async () => {
    const userHistoryData: any = await AsyncStorage.getItem('recordHistory');

    if (userHistoryData !== null) {
      const historyData = JSON.parse(userHistoryData);

      setDataToShow(historyData);
      return historyData;
    }
  }, []);

  const fetchResourcesData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getUserResourceData();
      console.log('data', data); // remove logs
      if (data) {
        const userHistoryData = await getUserHistoryData();

        if (userHistoryData !== null) {
          const filteredData: HistoryDataProps[] = userHistoryData.map(
            (historyData: HistoryStorageDataProps) => {
              const selectedFarm = data?.farms?.filter((farm: FarmsProps) => {
                return farm.id === historyData.idFarm;
              })[0];

              const selectedReason = data?.reasons?.filter(
                (reason: ReasonsProps) => reason.id === historyData.idReason,
              )[0];

              return {
                id: uuid.v4(),
                iconPath: selectedReason.icon,
                title: selectedFarm.name,
                subtitle: selectedReason.name,
                time: historyData.time,
              };
            },
          );

          setDataToShow(filteredData);
        }
      }
    } catch (e) {
      console.log('error updating', e);
    } finally {
      setIsLoading(false);
    }
  }, [getUserHistoryData]);

  useEffect(() => {
    if (isFocused) {
      fetchResourcesData();
    } else {
      setDataToShow([]);
    }
  }, [fetchResourcesData, isFocused]);

  return <HistoryActivityComponent {...{dataToShow, isLoading}} />;
};

export default HistoryActivity;
