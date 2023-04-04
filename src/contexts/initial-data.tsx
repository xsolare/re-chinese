import type { IInitialData } from '#/types/common'
import type { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { useEffect, createContext, useMemo } from 'react'
import { AppLoader } from '#/components/common/loader/app-loader'
import { useStore } from '#/store/index'

export const InitialContext = createContext({} as IInitialData)

type IInitialContextProvider = { value: IInitialData } & PropsWithChildren

// Initial context provider setup
//* ------------------------------------------------------------------------------------------ *//
export const InitialContextProvider: FC<IInitialContextProvider> = ({ value, children }) => {
  const router = useRouter()
  const { userStore, appStore } = useStore()

  userStore.setUser(value.user)
  if (value.theme) appStore.setTheme(value.theme)

  const handleStart = () => appStore.setLoading(true)
  const handleComplete = () => appStore.setLoading(false)

  useEffect(() => {
    appStore.addAxiosInterceptors()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [])

  return (
    <InitialContext.Provider value={useMemo(() => value, [value])}>
      <AppLoader />
      {children}
    </InitialContext.Provider>
  )
}
