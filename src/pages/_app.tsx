import type { ThemeVarious } from '#/contexts/theme'
import type { IInitialData } from '#/types/common'
import type { NextComponentType, NextPage } from 'next'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import type { FC, PropsWithChildren, ReactNode, ReactElement } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { getCookie } from 'cookies-next'
import NextApp from 'next/app'
import { DefaultSeo } from 'next-seo'
import React, { memo, useMemo } from 'react'
import DefaultLayout from '#/components/layouts/default.layout'
import { InitialContextProvider } from '#/contexts/initial-data'
import { RootStoreProvider } from '#/contexts/root-store'
import ThemeProvider from '#/contexts/theme'
import nextSeoConfig from 'next-seo.config'

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

type IAppProps = NextComponentType<
  AppContext,
  AppInitialProps,
  AppPropsWithLayout & { initData: IInitialData }
>

// App
//* ------------------------------------------------------------------------------------------ *//
const App: IAppProps = (props) => {
  const { initData, Component, pageProps } = props
  const getLayout = Component.getLayout ?? ((page) => page)

  const Inner = useMemo(
    () => (initData ? getLayout(<Component {...pageProps} />) : <div>NoDataErrorView</div>),
    [Component, pageProps]
  )

  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <RootStoreProvider>
        <InitialContextProvider value={initData}>
          <AppWrapper>{Inner}</AppWrapper>
        </InitialContextProvider>
      </RootStoreProvider>
      <Analytics />
    </>
  )
}

const AppWrapper: FC<PropsWithChildren> = memo(({ children }) => (
  <ThemeProvider>
    <DefaultLayout>{children}</DefaultLayout>
  </ThemeProvider>
))

App.getInitialProps = async (props: AppContext) => {
  const initialData = {} as IInitialData

  initialData.theme = getCookie('_THEME_', { req: props.ctx.req }) as ThemeVarious

  const appProps = await (async () => {
    return NextApp.getInitialProps(props)
  })()

  return {
    ...appProps,
    initData: initialData
  }
}

export default App
