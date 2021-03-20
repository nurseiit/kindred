import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

import GlobalStyle from '../themes/globalStyle';

import store from '../app/store';
import { api } from '../utils';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kindred</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <SWRConfig value={{ fetcher: api }}>
        <Provider store={store}>
          <GeistProvider>
            <CssBaseline />
            <GlobalStyle />
            <Component {...pageProps} />
          </GeistProvider>
        </Provider>
      </SWRConfig>
    </>
  );
}
