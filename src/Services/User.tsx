import customFetch from './CustomFetch';
import {endpoints} from './endpoints';

export async function LoginService(credentials: {
  email: string;
  senha: string;
}) {
  console.log('endpoints.login', endpoints.login); // remove logs
  console.log('credentials', credentials); // remove logs
  try {
    let response = await customFetch(endpoints.login, {
      method: 'POST',
      bodyReq: credentials,
    });

    return response;
  } catch (err) {
    throw err;
  }
}
