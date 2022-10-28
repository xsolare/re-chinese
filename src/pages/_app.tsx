import '#/assets/scss/index.scss';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import NextApp from 'next/app';
import type { FC, PropsWithChildren, ReactNode, ReactElement } from 'react';
import React, { memo, useMemo } from 'react';
import { InitialContextProvider } from '#/contexts/initial-data';
import { RootStoreProvider } from '#/contexts/root-store';
import type { NextComponentType, NextPage } from 'next';
import type { UserModel } from '#/store/user';
import DefaultLayout from '#/components/layouts/default.layout';
import ThemeProvider from '#/contexts/theme';

export interface AppModel {
  initData: UserModel;
}

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// App
//* ------------------------------------------------------------------------------------------ *//
const App: NextComponentType<AppContext, AppInitialProps, AppPropsWithLayout & AppModel> = (
  props
) => {
  const { initData, Component, pageProps } = props;

  const Inner = useMemo(() => {
    const getLayout = Component.getLayout ?? ((page) => page);
    return initData ? getLayout(<Component {...pageProps} />) : <div>NoDataErrorView</div>;
  }, [Component, pageProps]);

  return (
    <RootStoreProvider>
      <InitialContextProvider value={initData}>
        <AppWrapper>{Inner}</AppWrapper>
      </InitialContextProvider>
    </RootStoreProvider>
  );
};

const AppWrapper: FC<PropsWithChildren> = memo(({ children }) => (
  <ThemeProvider>
    <DefaultLayout>{children}</DefaultLayout>
  </ThemeProvider>
));

App.getInitialProps = async (props: AppContext) => {
  const initialData = {};

  const appProps = await (async () => {
    return NextApp.getInitialProps(props);
  })();

  return {
    ...appProps,
    initData: initialData
  };
};

export default App;
