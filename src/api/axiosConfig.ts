import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, Method } from 'axios';
import { LOGOUT, REFRESH_TOKEN } from '~/components/commons/constants/api';
import { ACCESS_TOKEN_KEY_STORAGE } from '~/components/commons/constants/constant';

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

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY_STORAGE);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401) {
      const isRefreshRequest = originalRequest.url?.includes(REFRESH_TOKEN);

      if (isRefreshRequest) {
        localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);
        return Promise.reject(error);
      }

      if (!originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const { accessToken } = await api.post(REFRESH_TOKEN).then((res) => res.data.result);

          localStorage.setItem(ACCESS_TOKEN_KEY_STORAGE, accessToken);

          return api(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);

          // Dispatch custom event để trigger logout từ AuthProvider
          window.dispatchEvent(new CustomEvent('auth:logout'));

          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
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
