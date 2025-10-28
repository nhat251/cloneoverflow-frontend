import axios from 'axios';
import type { AxiosRequestConfig, Method } from 'axios';

interface ApiRequestProps {
  path: string;
  method?: Method;
  data?: any;
  config?: AxiosRequestConfig;
}
const api = axios.create({
  baseURL: 'https://localhost:5261/api/',
  withCredentials: true,
});

const callApi = async ({
  path,
  method = 'GET',
  data,
  config,
}: ApiRequestProps): Promise<any> => {
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