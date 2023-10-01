import AsyncStorage from '@react-native-async-storage/async-storage';
import {postStopRegister} from '../Services/Stop';
import {StopData} from '@src/Pages/StopRecord/Types/StopRecordTypes';
import {handleFormatData} from './StopRecord';
import {showToast} from './Toastr';

export async function syncRecordData(userToken: string) {
  const dataToFetch = await AsyncStorage.getItem('dataToFetch');

  if (dataToFetch !== null) {
    const parceDataToFetch = JSON.parse(dataToFetch);
    let dataToPersist: StopData[] = [];
    parceDataToFetch.forEach(async (parceData: StopData) => {
      try {
        const ParceDataWithTime = {...parceData, time: +new Date()};

        const resp = await postStopRegister(ParceDataWithTime, userToken);

        if (resp.data.status === 'SYNCRONIZED_SUCCESS') {
          await handleFormatData('recordHistory', ParceDataWithTime);
          showToast('Conexão Retomada, dados enviados !');
        } else {
          dataToPersist.push(parceData);
        }
      } catch (e) {
        console.log('error updating', e);
        dataToPersist.push(parceData);
      }
    });

    await AsyncStorage.removeItem('dataToFetch');

    if (dataToPersist.length) {
      await AsyncStorage.setItem('dataToFetch', JSON.stringify(dataToPersist));
    }
  }
}
