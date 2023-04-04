import type { FC, PropsWithChildren } from 'react'
import React, { useEffect } from 'react'

//* Styles
import Header from '#/components/header/header'
import { DefaultStyled } from '#/components/layouts/default.style'

//* Components
import { store } from '#/store'

// Default layout
//* ------------------------------------------------------------------------------------------ *//
const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    store.appStore.updateViewport()
    store.appStore.updateScroll()

    window.onresize = () => {
      store.appStore.updateViewport()
    }
    window.onscroll = () => {
      store.appStore.updateScroll()
    }
  }, [])

  return (
    <>
      <Header />
      <DefaultStyled>{children}</DefaultStyled>
    </>
  )
}
export default DefaultLayout
