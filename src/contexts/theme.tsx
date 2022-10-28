import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { ThemeProvider as ThemeEmotionProvider } from '@emotion/react';
import { ThemeProvider as ThemeNextProvider, useTheme } from 'next-themes';
import { theme, themeBlue, themeDark } from '#/utils/theme';
import type { ThemeTypes } from '#/utils/theme';

export type ThemeVarious = 'light' | 'dark' | 'blue';
export const themes: Record<string, ThemeTypes> = {
  light: theme,
  dark: themeDark,
  blue: themeBlue
};

// Theme layout provider setup
//* ------------------------------------------------------------------------------------------ *//
const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme: currentTheme } = useTheme();

  return (
    <ThemeNextProvider attribute="class">
      <ThemeEmotionProvider theme={themes[(currentTheme ?? 'light') as ThemeVarious]}>
        {children}
      </ThemeEmotionProvider>
    </ThemeNextProvider>
  );
};

export default ThemeProvider;
