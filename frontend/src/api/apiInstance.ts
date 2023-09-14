import axios from 'axios';
import authStorage from '../lib/auth/storage';

const apiInstance = axios.create({
  baseURL: 'http://192.168.109.52:8888/api/v1',
  timeout: 10000,
});

apiInstance.interceptors.request.use(async (config: any) => {
  const token = await authStorage.getToken();
  if (!token) {
    return config;
  }

  config.headers = {Authorization: `Bearer ${token}`};
  return config;
});

export default apiInstance;
