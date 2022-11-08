import { breakpoint } from '#/utils/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyles = css`
  html {
    font-size: 18px;

    ${breakpoint('sm')} {
      font-size: 14px;
    }
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;

    font-family: Rubik, 'Noto Sans SC', sans-serif, -apple-system, blinkmacsystemfont, 'Segoe UI',
      roboto, 'Helvetica Neue', arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 300;

    text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  }

  [tabindex='-1']:focus:not(:focus-visible) {
    outline: 0 !important;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 900;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: 900;
  }

  a:not([href]) {
    &,
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    background: transparent;
    border: none;
    outline: none;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  select {
    word-wrap: normal;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: textfield;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-datetime-edit {
    overflow: visible;
    line-height: 0;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  template {
    display: none;
  }

  main {
    display: block;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 100%;
    background-color: #333;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(93 93 93);
    border-radius: 10px;
    box-shadow: inset 0 0 5px #444;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    box-shadow: inset 0 0 1px #444;
  }
`;

export const RuleStyledHTML = styled.div`
  display: flex;
  align-items: center;

  margin: 15px 0;

  > span {
    padding: 10px 15px;
    display: inline-block;

    color: ${({ theme }) => theme.palette.color.text};
    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border: 2px solid ${({ theme }) => theme.palette.border.hieroglyph};
    box-shadow: inset 0 0 2px ${({ theme }) => theme.palette.bg.hieroglyph};
    border-radius: 10px;

    font-family: ${({ theme }) => theme.font.family.text};
    font-weight: 500;
    font-size: 1rem;
  }

  > span > span {
    margin: 0 4px;
  }
`;

export const PinyinStyledHTML = styled.span`
  color: ${({ theme }) => theme.palette.color.subText};
  font-family: ${({ theme }) => theme.font.family.chn};
  font-weight: 500;
  font-size: 1rem;
`;

export const WarnStyledHTML = styled.span`
  display: inline-block;
  padding: 10px;
  background: ${({ theme }) => theme.palette.bg.mainContent};
  border-left: 2px solid ${({ theme }) => theme.palette.bg.highlight};
  border-radius: 4px 10px 10px 4px;
`;

export const ExampleStyledHTML = styled.div`
  padding-left: 10px;
  border-left: 2px dashed ${({ theme }) => theme.palette.border.hieroglyph};
`;

export const TextStyledHTML = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 300;
  font-size: 1rem;
`;

export const TextTabStyledHTML = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1rem;
  text-indent: 20px;
`;

export const HrStyledHTML = styled.hr`
  width: 100%;
  min-height: 4px;
  margin: 16px 0 32px 0;

  background: none;
  background-color: ${({ theme }) => theme.palette.divider};
`;
