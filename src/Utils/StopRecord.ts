import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  RecordHistoryProp,
  StopData,
} from '@src/Pages/StopRecord/Types/StopRecordTypes';

export async function handleFormatData(
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
