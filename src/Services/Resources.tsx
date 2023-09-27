import customFetch from './CustomFetch';
import {endpoints} from './endpoints';

export async function getResources(token: string) {
  try {
    let response = await customFetch(endpoints.resources, {
      method: 'GET',
      token,
    });

    return response;
  } catch (err) {
    throw err;
  }
}
