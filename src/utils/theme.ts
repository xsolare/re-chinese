const Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};

export const breakpoint = (n: keyof typeof Breakpoints, size?: 'min' | 'max'): string =>
  `@media (${size ?? 'max'}-width: ${Breakpoints[n]}px)`;

export const pxToRem = (pxValue: number, baseFontSize: number): string =>
  `${pxValue / baseFontSize || 16}rem`;

const font = {
  family: {
    base: `Rubik, 'Noto Sans SC', sans-serif, -apple-system, blinkmacsystemfont,
          'Segoe UI', roboto, 'Helvetica Neue', arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !default;`,
    monospace: `
    "sfmono-regular, menlo, monaco, consolas, 'Liberation Mono', 'Courier New',"
    `,
    text: 'Rubik',
    chn: 'Noto Sans SC'
  },
  size: {
    hieroglyph: '1.1rem',
    text: '1rem'
  }
};

const palette = {
  color: {
    text: '#262728',
    subText: '#535353',
    textInvert: '#e4e4e4',
    subTextInvert: '#6d6e6f',
    hieroglyph: '#262728',
    translate: '#262728',
    pinyin: '#262728'
  },
  bg: {
    main: '#eeeeee',
    mainContent: '#e4e4e4',
    modal: '#333',
    modalContent: '#444',
    highlight: '#6db6ff',
    hieroglyph: '#8fb2ff52'
  },
  border: {
    hieroglyph: '#8fb2ff63'
  },
  divider: '#cccccc'
};

const paletteDark = {
  color: {
    text: '#e4e4e4',
    subText: '#888888',
    textInvert: '#e4e4e4',
    subTextInvert: '#6d6e6f',
    hieroglyph: '#262728',
    translate: '#262728',
    pinyin: '#262728'
  },
  bg: {
    main: '#1e1f20',
    mainContent: '#121314',
    modal: '#333',
    modalContent: '#444',
    highlight: '#f65341',
    hieroglyph: '#02000050'
  },
  border: {
    hieroglyph: '#ff496754'
  },
  divider: '#808080'
};

const paletteBlue = {
  color: {
    text: '#e4e4e4',
    subText: '#6d6e6f',
    textInvert: '#e4e4e4',
    subTextInvert: '#6d6e6f',
    hieroglyph: '#262728',
    translate: '#262728',
    pinyin: '#262728'
  },
  bg: {
    main: '#0d1117',
    mainContent: '#161b22',
    modal: '#1b222c',
    modalContent: '#141d27',
    highlight: '#6db6ff',
    hieroglyph: '#182841'
  },
  border: {
    hieroglyph: '#85e3ff2e'
  },
  divider: '#808080'
};

export const theme = {
  palette,
  font
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
