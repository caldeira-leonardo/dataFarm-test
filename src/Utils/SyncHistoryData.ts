import AsyncStorage from '@react-native-async-storage/async-storage';
import {postStopRegister} from '../Services/Stop';

export async function syncRecordData(userToken: string) {
  const dataToFetch = await AsyncStorage.getItem('dataToFetch');

  if (dataToFetch !== null) {
    const parceDataToFetch = JSON.parse(dataToFetch);
    // const resp = await postStopRegister(parceDataToFetch, userToken);

    // console.log('resp', resp); // remove logs

    console.log('syncRecordData parceDataToFetch', parceDataToFetch); // remove logs
  }
}
