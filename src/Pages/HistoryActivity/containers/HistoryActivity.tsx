import React, {useCallback, useEffect, useState} from 'react';
import HistoryActivityComponent from '../components/HistoryActivityComponent';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  HistoryDataProps,
  HistoryStorageDataProps,
} from '../Types/HistoryActivityTypes';
import {useUser} from '../../../Context/userContext';
import {getResources} from '../../../Services/Resources';
import {FarmsProps, ReasonsProps} from '../../StopRecord/Types/StopRecordTypes';
import uuid from 'react-native-uuid';

const HistoryActivity = () => {
  const isFocused = useIsFocused();
  const {user} = useUser();
  const [dataToShow, setDataToShow] = useState<HistoryDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserHistoryData = useCallback(async () => {
    const userHystoryData: any = await AsyncStorage.getItem('recordHistory');

    if (userHystoryData !== null) {
      const historyData = JSON.parse(userHystoryData);

      setDataToShow(historyData);
      return historyData;
    }
  }, []);

  const fetchResourcesData = useCallback(async () => {
    try {
      setIsLoading(true);
      if (user?.token) {
        const {data} = await getResources(user?.token);
        if (data) {
          const userHistoryData = await getUserHistoryData();

          if (userHistoryData !== null) {
            const filteredData: HistoryDataProps[] = userHistoryData.map(
              (historyData: HistoryStorageDataProps) => {
                const selectedFarm = data.resources?.farms.filter(
                  (farm: FarmsProps) => {
                    return farm.id === historyData.idFarm;
                  },
                )[0];

                const selectedReason = data.resources?.reasons.filter(
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
      }
    } catch (e) {
      console.log('error updating', e);
    } finally {
      setIsLoading(false);
    }
  }, [user?.token, getUserHistoryData]);

  useEffect(() => {
    if (isFocused) {
      fetchResourcesData();
    }
  }, [fetchResourcesData, isFocused]);

  return <HistoryActivityComponent {...{dataToShow, isLoading}} />;
};

export default HistoryActivity;
