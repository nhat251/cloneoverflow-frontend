import axios, { AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

// Tạo một instance Axios với baseURL tùy chỉnh (thay đổi theo nhu cầu)
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:7068', // Thay bằng base URL của API
  timeout: 10000,
  withCredentials: true, // Bật để gửi cookie (bao gồm HttpOnly cookies) với mỗi request
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response Interceptor: Xử lý lỗi 401 để refresh token
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Nếu lỗi là 401 và chưa retry (tránh infinite loop)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axiosInstance.post('/api/auth/refresh-token'); // Request này sẽ gửi refresh token qua cookie

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Nếu refresh fail, process queue với error và có thể logout user
        await axiosInstance.post('/logout');
        set user = null
        // navigate ve home.
        return Promise.reject(refreshError);
      }
    }
  },
);

export default axiosInstance;
