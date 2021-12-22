import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import axios from 'axios';

const getData = <T>(res: AxiosResponse<T>): T => res.data;

const handleError = (e: AxiosError<ApiError>) => {
  const error = e.response?.data;
  if (error == null) throw e;
  throw error;
};

const AxiosHttpClient = (instance: AxiosInstance) => ({
  get: <T>(endpoint: string, options?: AxiosRequestConfig) =>
    instance.get<T>(endpoint, options).then(getData).catch(handleError),

  delete: <T>(endpoint: string, options?: AxiosRequestConfig) =>
    instance.delete<T>(endpoint, options).then(getData).catch(handleError),

  post: <T>(endpoint: string, data: any, options?: AxiosRequestConfig) =>
    instance.post<T>(endpoint, data, options).then(getData).catch(handleError),

  put: <T>(endpoint: string, data: any, options?: AxiosRequestConfig) =>
    instance.put<T>(endpoint, data, options).then(getData).catch(handleError),

  patch: <T>(endpoint: string, data: any, options?: AxiosRequestConfig) =>
    instance.put<T>(endpoint, data, options).then(getData).catch(handleError),
});

const api = axios.create({ baseURL: '/api' });
export const apiClient = AxiosHttpClient(api);
