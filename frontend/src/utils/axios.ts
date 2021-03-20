import axios from 'axios';
import store from '../app/store';
import { logout } from '../features/auth/authSlice';
import { getTokens } from '../utils';
import { API_BASE_URL } from './constants';

const api = axios.create({ baseURL: API_BASE_URL });

api.interceptors.request.use(
  (config) => {
    const tokens = getTokens();
    if (tokens && tokens.accessToken) {
      config.headers['Authorization'] = 'Bearer ' + tokens.accessToken;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // todo refresh
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export { api };
