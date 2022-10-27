/* eslint-disable @typescript-eslint/no-explicit-any */
import '#/assets/scss/index.scss';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import type { NextComponentType } from 'next';
import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import nextSeoConfig from 'next-seo.config';
import Favicon from 'src/components/head/Favicon';
import { Provider } from 'react-redux';
import { wrapper } from '../store/index';
import ThemeProvider from '../contexts/theme';
import LayoutDefault from '../components/layouts/Default.layout';

const App: NextComponentType<AppContext, AppInitialProps, AppProps & {}> = ({
  Component,
  ...rest
}: AppProps) => {
  const pageConfigs = [
    { id: 'config-1', name: 'http-equiv', content: 'autoRotate:disabled' },
    {
      id: 'config-2',
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0, viewport-fit=cover'
    }
  ];

  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <>
      <Head>
        <Favicon />
        {pageConfigs.map((config) => (
          <meta key={config.id} {...config} />
        ))}
      </Head>

      <DefaultSeo {...nextSeoConfig} />

      <Provider store={store}>
        <ThemeProvider>
          <Page {...{ Component, pageProps }} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;

const Page = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  const Guard = Component.guard || React.Fragment;
  const Layout = Component.layout || LayoutDefault;
  const SubLayout = Component.subLayout || React.Fragment;

  return (
    <Guard>
      <Layout>
        <SubLayout>
          <Component {...pageProps} />
        </SubLayout>
      </Layout>
    </Guard>
  );
};
