import { axiosInstance } from './axiosInstance';

const AUTHORIZATION_HEADER = 'Authorization';
const BEARER_TOKEN_PREFIX = 'Bearer';

export const setAuthToken = (token: string) => {
  axiosInstance.defaults.headers.common[
    AUTHORIZATION_HEADER
  ] = `${BEARER_TOKEN_PREFIX} ${token}`;
};
