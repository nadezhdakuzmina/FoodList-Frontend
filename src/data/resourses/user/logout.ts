import axios from 'axios';
import { RESOURCE_URL } from './constants';

const METHOD_URL = `${RESOURCE_URL}/logout`;

export const logout = async (): Promise<string> => {
  return axios(METHOD_URL, {
    withCredentials: true,
  });
};
