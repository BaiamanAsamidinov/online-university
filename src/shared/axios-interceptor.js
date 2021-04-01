import axios from 'axios';

import { SERVER_API_URL } from './constants';

const TIMEOUT = 1000000;
const onRequestSuccess = config => {
//   const token = localStorage.getItem('authenticationToken') || sessionStorage.getItem('authenticationToken');
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE5Nzk0ODg3LCJqdGkiOiJjZmJhYzMwYjkyMjQ0N2FjOGNkZGViYjYzYmZkNWEyYiIsInVzZXJfaWQiOjF9.PsIzOPrbw5hkxj213d_l8CyIeY3TCkXBcssPobe8Vzw"
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `JWT ${token}`;
  }
  config.timeout = TIMEOUT;
  config.url = `${SERVER_API_URL}${config.url}`;
  return config;
};
const setupAxiosInterceptors = onUnauthenticated => {
  const onResponseError = err => {
    // const status = err.status || err.response.status;
    // if (status === 403 || status === 401) {
    //   onUnauthenticated();
    // }
    onUnauthenticated();
    return Promise.reject(err);
  };
  if (axios.interceptors) {
    axios.interceptors.request.use(onRequestSuccess);
    axios.interceptors.response.use(res => res, onResponseError);
  }
};

export { onRequestSuccess, setupAxiosInterceptors };
