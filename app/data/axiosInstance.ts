import axios from 'axios';
import {HN_ROOT_URL} from './utils/api';

const axiosInstance = axios.create({
  baseURL: HN_ROOT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
