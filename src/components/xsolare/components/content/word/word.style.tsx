import type { IWordType } from '#/store/word'
import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'

interface IWordStyledProps {
  type: IWordType
  styleInvert: boolean
}
export const WordStyled = styled.div<IWordStyledProps>`
  display: inline-block;

  color: ${({ theme, styleInvert }) => theme.palette.color[styleInvert ? 'textInvert' : 'text']};
  font-size: ${({ theme }) => theme.font.size.hieroglyph};
  font-family: ${({ theme }) => theme.font.family.chn};
  font-weight: 400;

  margin: 4px 0;
  margin-right: 4px;

  .pinyin {
    color: ${({ theme, styleInvert }) =>
      theme.palette.color[styleInvert ? 'pinyinInvert' : 'pinyin']};
    font-family: ${({ theme }) => theme.font.family.pinyin};
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.2px;
  }

  .hieroglyph {
    letter-spacing: 2px;
    padding: 1px 4px;
    border-radius: 5px;
    background: ${({ theme }) => theme.palette.bg.hieroglyph};
    border: 1px solid ${({ theme }) => theme.palette.border.hieroglyph};
  }

  .translate {
    font-family: ${({ theme }) => theme.font.family.text};
    color: ${({ theme, styleInvert }) => theme.palette.color[styleInvert ? 'textInvert' : 'text']};
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.2px;
  }

  ${({ type, theme }) => getWordStyle(type, theme)}
`

function getWordStyle(type: IWordType, theme: Theme): string {
  switch (type) {
    case 2:
      return `
    display: inline-flex;
    gap: 10px;
    `

    case 3:
      return `
    .hieroglyph {
      margin: 0 5px;
    }
    `

    case 4:
      return `
    display: inline-flex;
    flex-direction: column;
    border: 1px solid ${theme.palette.border.hieroglyph};
    border-radius: 10px;
    padding-left: 0px !important;


    .pinyin {
      text-align: center;
      padding: 5px 10px;
    }

    .hieroglyph {
      font-size: 1.2rem;
      text-align: center;
      border-radius: 0px;
      border: none;
      border-top: 1px solid ${theme.palette.border.hieroglyph};
      border-bottom: 1px solid ${theme.palette.border.hieroglyph};
    }

    .translate {
      text-align: center;
      padding: 5px 10px;
    }
    `

    case 5:
      return `
    display: inline-grid;
    grid-template-areas: 
                  "H P"
                  "H T";


    .pinyin {
      grid-area: P;
      display:flex;
      align-items: center;

      border-top: 1px solid ${theme.palette.border.hieroglyph};
      border-right: 1px solid ${theme.palette.border.hieroglyph};
      border-bottom: 1px solid ${theme.palette.divider};
      border-radius: 0 10px 0 0;
      padding: 2px 10px;
    }

    .hieroglyph {
      grid-area: H;
      display:flex;
      align-items: center;

      border-radius: 10px 0 0 10px;
      padding: 0 10px;

      font-size: 1.5rem;
    }

    .translate {
      grid-area: T;
      display:flex;
      align-items: center;

      border-bottom: 1px solid ${theme.palette.border.hieroglyph};
      border-right: 1px solid ${theme.palette.border.hieroglyph};
      border-radius: 0 0 10px 0;
      padding: 2px 10px;

      font-weight: 400;
    }
    `

    default:
      return ''
  }
}
