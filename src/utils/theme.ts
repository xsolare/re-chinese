const Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};

export const breakpoint = (n: keyof typeof Breakpoints): string =>
  `@media (min-width: ${Breakpoints[n]}px)`;

export const pxToRem = (pxValue: number, baseFontSize: number): string =>
  `${pxValue / baseFontSize || 16}rem`;

const palette = {
  color: {
    text: '#262728',
    subText: '#535353',
    textInvert: '#e4e4e4',
    subTextInvert: '#6d6e6f'
  },
  bg: {
    main: '#eeeeee',
    mainContent: '#e4e4e4',
    modal: '#333',
    modalContent: '#444',
    highlight: '#6db6ff'
  },
  divider: '#cccccc'
};

const paletteDark = {
  bg: {
    main: '#1e1f20',
    mainContent: '#121314',
    modal: '#333',
    modalContent: '#444',
    highlight: '#f65341'
  },
  color: {
    text: '#e4e4e4',
    subText: '#888888',
    textInvert: '#e4e4e4',
    subTextInvert: '#6d6e6f'
  },
  divider: '#808080'
};

const paletteBlue = {
  bg: {
    main: '#0d1117',
    mainContent: '#161b22',
    modal: '#1b222c',
    modalContent: '#141d27',
    highlight: '#6db6ff'
  },
  color: {
    text: '#e4e4e4',
    subText: '#6d6e6f',
    textInvert: '#e4e4e4',
    subTextInvert: '#6d6e6f'
  },
  divider: '#808080'
};

export const theme = {
  palette
};

export type ThemeTypes = typeof theme;

export const themeDark: ThemeTypes = {
  ...theme,
  palette: {
    ...theme.palette,
    ...paletteDark
  }
};

export const themeBlue: ThemeTypes = {
  ...theme,
  palette: {
    ...theme.palette,
    ...paletteBlue
  }
};
