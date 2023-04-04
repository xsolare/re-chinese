import type { ThemeTypes } from '#/utils/theme/emotion-theme'
import type { Dispatch, PropsWithChildren, SetStateAction, FC } from 'react'
import { ThemeProvider as ThemeEmotionProvider } from '@emotion/react'
import { ConfigProvider as ThemeAntdProvider, } from 'antd'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useStore } from '#/store'
import { themeAntd } from '#/utils/theme'
import { theme as themeLigth, themeBlue, themeDark } from '#/utils/theme/emotion-theme'

export type ThemeValue = {
  themeContext: ThemeVarious
  setThemeContext: Dispatch<SetStateAction<ThemeVarious>>
}

export type ThemeVarious = 'light' | 'dark' | 'blue'

export const themes: Record<string, ThemeTypes> = {
  light: themeLigth,
  dark: themeDark,
  blue: themeBlue
}

// Theme provider setup
//* ------------------------------------------------------------------------------------------ *//
const ThemeProvider: FC<PropsWithChildren> = observer(({ children }) => {
  const { appStore } = useStore()
  const { theme: currentTheme } = appStore.state

  useEffect(() => document.documentElement.setAttribute('data-theme', currentTheme), [currentTheme])

  return (
    <ThemeEmotionProvider theme={themes[currentTheme]}>
      <ThemeAntdProvider theme={themeAntd}>{children}</ThemeAntdProvider>
    </ThemeEmotionProvider>
  )
})

export default ThemeProvider
