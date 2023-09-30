import React, {useState, useCallback, useEffect} from 'react';
import StopRecordComponent from '../components/StopRecordComponent';
import {useUser} from '../../../Context/userContext';
import {
  FarmsProps,
  MachineriesProps,
  ReasonsProps,
  RecordHistoryProp,
  StopData,
} from '../Types/StopRecordTypes';
import uuid from 'react-native-uuid';
import Local from '@react-native-community/geolocation';
import {postStopRegister} from '../../../Services/Stop';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StopRecord = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [machineries, setMachineries] = useState<MachineriesProps[]>([]);
  const [farms, setFarms] = useState<FarmsProps[]>([]);
  const [reasons, setReasons] = useState<ReasonsProps[]>([]);
  const {user, hasInternet} = useUser();

  const fetchResourcesData = useCallback(async () => {
    try {
      setIsFetching(true);
      const data = await AsyncStorage.getItem('resources');
      if (data !== null) {
        const parceData = JSON.parse(data);
        setMachineries(parceData?.machineries);
        setFarms(parceData?.farms);
        setReasons([...parceData?.reasons]);
      }
    } catch (e) {
      console.log('error updating', e);
    } finally {
      setIsFetching(false);
    }
  }, []);

  async function sendData(dataToSend: StopData, userToken: string) {
    try {
      if (hasInternet) {
        const resp = await postStopRegister(dataToSend, userToken);

        if (resp?.data?.status === 'SYNCRONIZED_SUCCESS') {
          const dataToSave = {
            idFarm: dataToSend.idFarm,
            idReason: dataToSend.idReason,
            time: +new Date(),
          };

          await handleFormatData('recordHistory', dataToSave);
        }
      } else {
        await handleFormatData('dataToFetch', dataToSend);
      }
    } catch (e) {
      console.log('error updating', e);
    } finally {
      setIsLoading(false);
    }
  }

  function submit(values: any) {
    setIsLoading(true);

    Local.getCurrentPosition(
      pos => {
        const {
          coords: {latitude: lat, longitude: lon},
        } = pos;

        const dataToSend: StopData = {
          uuid: uuid.v4(),
          note: values?.stopNote,
          idFarm: values.farm.key,
          idField: values.fieldOption.key,
          idReason: values.stopReason.key,
          idMachinery: values.machinerie.key,
          minutes: values.timer,
          longitude: lon,
          latitude: lat,
        };
        if (user?.token) {
          sendData(dataToSend, user?.token);
        }
        setIsLoading(false);
      },
      err => {
        console.log('Algo deu errado: ' + err.message);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  }

  useEffect(() => {
    fetchResourcesData();
  }, [fetchResourcesData]);

  return (
    <StopRecordComponent
      {...{isLoading, machineries, farms, reasons, submit, isFetching}}
    />
  );
};

export default StopRecord;

async function handleFormatData(
  storageName: string,
  dataToAdd: StopData | RecordHistoryProp,
) {
  const storageItem = await AsyncStorage.getItem(storageName);

  let newItem: any[] = [];

  if (storageItem !== null) {
    const parceItem = JSON.parse(storageItem);
    newItem = [...parceItem];
  }

  await AsyncStorage.setItem(
    storageName,
    JSON.stringify([...newItem, dataToAdd]),
  );
}
