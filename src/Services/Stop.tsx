import {StopData} from '../Pages/StopRecord/Types/StopRecordTypes';
import customFetch from './CustomFetch';
import {endpoints} from './endpoints';

export async function postStopRegister(stopData: StopData, userToken: string) {
  try {
    let response = await customFetch(endpoints.sendStop, {
      method: 'POST',
      bodyReq: stopData,
      token: userToken,
    });

    return response;
  } catch (err) {
    throw err;
  }
}
