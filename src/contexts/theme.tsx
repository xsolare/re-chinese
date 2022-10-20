import type { FC, PropsWithChildren } from 'react'
import React, { createContext, useEffect, useState } from 'react'
import { ThemeProvider as ThemeEmotionProvider } from '@emotion/react'
import { theme, themeBlue, themeDark } from '#/utils/theme'

import type { Dispatch, SetStateAction } from 'react'
import type { ThemeTypes } from '#/utils/theme'

import { setCookies, getCookie } from 'cookies-next'

export type ThemeValue = {
  themeContext: ThemeVarious
  setThemeContext: Dispatch<SetStateAction<ThemeVarious>>
}

export type ThemeVarious = 'light' | 'dark' | 'blue'

export const ThemeContext = createContext<ThemeValue | null>(null)

export const themes: Record<string, ThemeTypes> = {
  light: theme,
  dark: themeDark,
  blue: themeBlue
}

// Theme layout provider setup
//* ------------------------------------------------------------------------------------------ *//
const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeContext, setThemeContext] = useState<ThemeVarious>(
    (getCookie('__THEME__') ?? 'light') as ThemeVarious
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeContext)
    setCookies('__THEME__', themeContext)
  }, [themeContext])

  return (
    <ThemeEmotionProvider theme={themes[themeContext]}>
      <ThemeContext.Provider value={{ themeContext, setThemeContext }}>
        {children}
      </ThemeContext.Provider>
    </ThemeEmotionProvider>
  )
}

export default ThemeProvider
