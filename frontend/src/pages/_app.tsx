import type { AppProps } from 'next/app';
import Router from 'next/router';
import { Provider } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import { SWRConfig } from 'swr';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

import store from '../app/store';
import { TOKEN_COOKIE_NAME } from '../utils';

axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get(TOKEN_COOKIE_NAME);
    if (token) {
      config.headers['Authorization'] = 'Token ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove(TOKEN_COOKIE_NAME);
      Router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: axios }}>
      <Provider store={store}>
        <GeistProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </GeistProvider>
      </Provider>
    </SWRConfig>
  );
}
