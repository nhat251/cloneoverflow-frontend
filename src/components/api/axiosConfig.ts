import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, Method } from 'axios';
import { LOGOUT, REFRESH_TOKEN } from '~/constants/api';
import { useNavigate } from 'react-router-dom';
import { use } from 'react';

interface ApiRequestProps {
  path: string;
  method?: Method;
  data?: any;
  config?: AxiosRequestConfig;
}
const api = axios.create({
  baseURL: 'https://localhost:7068/api/',
  timeout: 10000,
  withCredentials: true,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry: boolean };
    if (error.response?.status === 401) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        await api.post(REFRESH_TOKEN);
        console.log(originalRequest);

        return api(originalRequest);
      } else {
        api.post(LOGOUT);
      }
    }
    // const nagivate = useNavigate();
    // nagivate('/');
  },
);

const callApi = async ({ path, method = 'GET', data, config }: ApiRequestProps): Promise<any> => {
  try {
    let response;

    switch (method.toUpperCase()) {
      case 'GET':
        response = await api.get(path, config);
        break;

      case 'POST':
        console.log(data);
        response = await api.post(path, data, config);
        break;

      case 'PUT':
        response = await api.put(path, data, config);
        break;

      case 'PATCH':
        response = await api.patch(path, data, config);
        break;

      case 'DELETE':
        response = await api.delete(path, { ...config, data });
        break;

      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response.data;
  } catch (error) {
    console.error(`❌ Error calling API [${method}] ${path}:`, error);
    throw error;
  }
};

export default callApi;
