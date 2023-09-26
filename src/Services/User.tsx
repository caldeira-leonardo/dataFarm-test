import customFetch from './CustomFetch';
import {endpoints} from './endpoints';

export async function LoginService(credentials: {
  email: string;
  senha: string;
  idPartner: number;
}) {
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
