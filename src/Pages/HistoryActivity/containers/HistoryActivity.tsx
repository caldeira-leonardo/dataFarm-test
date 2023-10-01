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
  const [dataNotYetSent, setdataNotYetSent] = useState<HistoryDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getResourcesData = useCallback(
    async (resourceData: any, storageLocal: string, alreadySent: boolean) => {
      const fetchedUserData: any = await AsyncStorage.getItem(storageLocal);

      let dataToReturn: HistoryDataProps[] = [];
      if (fetchedUserData !== null) {
        const userData = JSON.parse(fetchedUserData);
        dataToReturn = userData?.map((historyData: HistoryStorageDataProps) => {
          const selectedFarm = resourceData?.farms?.filter(
            (farm: FarmsProps) => {
              return farm.id === historyData.idFarm;
            },
          )[0];

          const selectedReason = resourceData?.reasons?.filter(
            (reason: ReasonsProps) => reason.id === historyData.idReason,
          )[0];

          return {
            id: uuid.v4(),
            iconPath: selectedReason.icon,
            title: selectedFarm.name,
            subtitle: selectedReason.name,
            time: historyData.time,
            alreadySent,
          };
        });
      }
      return dataToReturn;
    },
    [],
  );

  const fetchResourcesData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getUserResourceData();
      if (data !== null) {
        const userHistoryData = await getResourcesData(
          data,
          'recordHistory',
          true,
        );
        setDataToShow(userHistoryData);
        const dataToFetch = await getResourcesData(data, 'dataToFetch', false);
        setdataNotYetSent(dataToFetch);
      }
    } catch (e) {
      console.log('error updating', e);
    } finally {
      setIsLoading(false);
    }
  }, [getResourcesData]);

  useEffect(() => {
    if (isFocused) {
      fetchResourcesData();
    }
  }, [fetchResourcesData, isFocused]);

  return (
    <HistoryActivityComponent {...{dataToShow, dataNotYetSent, isLoading}} />
  );
};

export default HistoryActivity;
