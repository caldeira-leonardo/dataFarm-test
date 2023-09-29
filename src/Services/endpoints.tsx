import {BASE_URL} from './baseURL';

const MACHINE = 'mobile/machine/';

export const endpoints = {
  login: BASE_URL + 'api/auth/v2',
  resources: BASE_URL + MACHINE + 'resources',
  sendStop: BASE_URL + MACHINE + 'stop-register/registry',
};
