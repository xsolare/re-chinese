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

const sizes = {
  header: { height: '50px' }
};

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
    pinyin: '#262728',
    header: '#e0e0e0'
  },
  bg: {
    main: '#eeeeee',
    mainContent: '#e4e4e4',
    modal: '#333',
    modalContent: '#444',
    highlight: '#6db6ff',
    hieroglyph: '#8fb2ff52',
    rule: '#48D1CC',
    header: 'linear-gradient(to top right,  #232325, #292929, #232325)',
    headerBlur: 'rgba(24, 24, 24, 0.7)'
  },
  border: {
    header: '#7e7e7e',
    title: '#161b22',
    hieroglyph: '#8fb2ff63'
  },
  divider: '#cccccc'
};

const paletteDark = {
  color: {
    text: '#e4e4e4',
    subText: '#ababab',
    textInvert: '#e4e4e4',
    subTextInvert: '#6d6e6f',
    hieroglyph: '#262728',
    translate: '#262728',
    pinyin: '#262728',
    header: '#e0e0e0'
  },
  bg: {
    main: '#1e1f20',
    mainContent: '#121314',
    modal: '#333',
    modalContent: '#444',
    highlight: '#f65341',
    hieroglyph: '#02000050',
    rule: '#ff6633',
    header: 'linear-gradient(to top right,  #232325, #292929, #232325)',
    headerBlur: 'rgba(24, 24, 24, 0.7)'
  },
  border: {
    header: '#474747',
    title: '#6c757d',
    hieroglyph: '#ff496754'
  },
  divider: '#808080'
};

const paletteBlue = {
  color: {
    text: '#e4e4e4',
    subText: '#959595',
    textInvert: '#e4e4e4',
    subTextInvert: '#6d6e6f',
    hieroglyph: '#262728',
    translate: '#262728',
    pinyin: '#262728',
    header: '#e0e0e0'
  },
  bg: {
    main: '#0d1117',
    mainContent: '#161b22',
    modal: '#1b222c',
    modalContent: '#141d27',
    highlight: '#6db6ff',
    hieroglyph: '#182841',
    rule: '#8fb2ff52',
    header: 'linear-gradient(to top right,  #161b22, #1d242d, #161b22)',
    headerBlur: 'rgba(24, 24, 24, 0.7)'
  },
  border: {
    header: '#161b22',
    title: '#5d6a7e',
    hieroglyph: '#85e3ff2e'
  },
  divider: '#808080'
};

export const theme = {
  palette,
  font,
  sizes
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
