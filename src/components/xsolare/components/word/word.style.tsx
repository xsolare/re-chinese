import type { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface IWordStyledProps {
  type: number;
}
export const WordStyled = styled.div<IWordStyledProps>`
  display: inline-block;

  color: ${({ theme }) => theme.palette.color.text};
  font-size: ${({ theme }) => theme.font.size.hieroglyph};
  font-family: ${({ theme }) => theme.font.family.chn};
  font-weight: 400;

  margin: 4px 0;
  margin-right: 4px;

  .pinyin {
    color: ${({ theme }) => theme.palette.color.pinyin};
    font-family: ${({ theme }) => theme.font.family.pinyin};
    font-weight: 400;
    font-size: 1rem;

    letter-spacing: 1px;
  }

  .hieroglyph {
    letter-spacing: 2px;
    padding: 1px 4px;
    border-radius: 5px;
    background: ${({ theme }) => theme.palette.bg.hieroglyph};
    border: 1px solid ${({ theme }) => theme.palette.border.hieroglyph};
  }

  .translate {
    color: ${({ theme }) => theme.palette.color.text};
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  ${({ type, theme }) => getWordStyle(type, theme)}
`;

function getWordStyle(type: number, theme: Theme): string {
  if (type === 2) {
    return `
    display: inline-flex;
    gap: 10px;
    
    .pinyin {
      display:flex;
      align-items: center;
      color: ${theme.palette.color.pinyin};

      font-size: 1rem;
      letter-spacing:0.2px;
      font-weight: 400;
      text-align: center;
    }

    .hieroglyph {
      grid-area: H;
      height: 100%;
      display:flex;
      align-items: center;


      letter-spacing: 1.5px;
      font-size: 1.2rem;
    }

    .translate {
      grid-area: T;

      border-bottom: 1px solid ${theme.palette.border.hieroglyph};
      border-right: 1px solid ${theme.palette.border.hieroglyph};
      border-radius: 0 0 5px 0;
      padding: 2px 10px;

      letter-spacing:0.2px;
      font-size: 0.8rem;
      font-weight: 300;
      font-family: ${theme.font.family.text};
    }
    `;
  }

  if (type === 4) {
    return `
    display: inline-flex;
    flex-direction: column;
    border: 1px solid ${theme.palette.border.hieroglyph};
    border-radius: 10px;
    padding: 5px 10px;

    .pinyin {
      font-size: 1rem;
      letter-spacing:0.2px;
      font-weight: 400;
      text-align: center;
      color: ${theme.palette.color.pinyin};
    }

    .hieroglyph {
      font-size: 1.2rem;
      text-align: center;
    }

    .translate {
      font-weight: 500;
      font-size: 1rem;
      letter-spacing:0.2px;
      text-align: center;
    }
    `;
  }

  if (type === 5) {
    return `
    display: inline-grid;
    grid-template-areas: 
                  "H P"
                  "H T";


    .pinyin {
      grid-area: P;

      font-size: 0.8rem;
      letter-spacing:0.2px;
      font-weight: 400;
      border-top: 1px solid ${theme.palette.border.hieroglyph};
      border-right: 1px solid ${theme.palette.border.hieroglyph};
      border-bottom: 1px solid ${theme.palette.divider};
      border-radius: 0 5px 0 0;
      padding: 2px 10px;
      color: ${theme.palette.color.pinyin};
    }

    .hieroglyph {
      grid-area: H;
      height: 100%;
      display:flex;
      align-items: center;

      border-radius: 5px 0 0 5px;
      padding: 0 10px;

      letter-spacing: 1.5px;
      font-size: 1.2rem;
    }

    .translate {
      grid-area: T;

      border-bottom: 1px solid ${theme.palette.border.hieroglyph};
      border-right: 1px solid ${theme.palette.border.hieroglyph};
      border-radius: 0 0 5px 0;
      padding: 2px 10px;

      letter-spacing:0.2px;
      font-size: 0.8rem;
      font-weight: 300;
      font-family: ${theme.font.family.text};
    }
    `;
  }

  return '';
}
