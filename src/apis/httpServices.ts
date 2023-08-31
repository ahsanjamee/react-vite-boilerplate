import axios, { InternalAxiosRequestConfig } from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

export function getAccessToken() {
  const accessToken = window.localStorage.getItem('access-token');
  return accessToken || '';
}
function getRefreshToken() {
  const refreshToken = window.localStorage.getItem('refresh-token');
  return refreshToken || '';
}

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const setAuthToken = (token: string) => (axios.defaults.headers.common['access-token'] = token);

const setTokenToLocalStorage = (response: any) => {
  localStorage.setItem('access-token', response.accessToken);
  localStorage.setItem('refresh-token', response.refreshToken);
};

let isRefreshing = false;

let failedQueue: any[] = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

//axios request interceptor
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken();
    config.headers = config.headers ?? {};

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  async (error) => {
    return error.response;
  }
);

//axios response interceptor for refresh token
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url.includes('auth/refresh/jwt-token')) {
      window.location.href = '/';
      return Promise.reject(error);
    }

    const refreshToken = getRefreshToken();
    if (error.response.status === 401 && refreshToken && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['access-token'] = token;
            return axios(originalRequest);
          })
          .catch((err) => {
            return err.response;
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        axios
          .post('auth/refresh/jwt-token', { refreshToken })
          .then((res) => {
            setTokenToLocalStorage(res.data.data);
            const { accessToken } = res.data.data;
            axios.defaults.headers.common['access-token'] = accessToken;
            originalRequest.headers['access-token'] = accessToken;
            processQueue(null, accessToken);
            resolve(axios(originalRequest));
          })
          .catch((error) => {
            processQueue(error, null);
            reject(error);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }
    return error.response;
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setAuthToken,
  setTokenToLocalStorage,
};
