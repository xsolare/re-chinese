import styled from '@emotion/styled';
import { breakpoint } from '../../../utils/theme';

interface IHieroglyphKeysQuestionProps {
  isPinyin: boolean;
  isTranslate: boolean;
}
export const HieroglyphKeysQuestion = styled.div<IHieroglyphKeysQuestionProps>`
  position: relative;
  margin: 10px;

  width: 200px;
  height: 200px;

  user-select: none;

  ${breakpoint('lg')} {
    width: 180px;
    height: 180px;
  }

  ${breakpoint('md')} {
    width: 160px;
    height: 160px;
  }

  ${breakpoint('sm')} {
    width: 130px;
    height: 130px;
    margin: 5px;
  }

  > div {
    overflow: hidden;
    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    box-shadow: ${({ theme }) => theme.palette.shadow.itemContent};
    border-radius: 10px;
    padding: 5px;

    height: 100%;
    width: 100%;

    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-areas:
      'pinyin'
      'hieroglyph'
      'translate';

    & {
      text-align: center;
    }

    overflow: hidden;

    .pinyin {
      grid-area: pinyin;

      display: ${({ isPinyin }) => (isPinyin ? 'flex' : 'none')};
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.palette.color.pinyin};
      font-family: ${({ theme }) => theme.font.family.chn};
      font-weight: 400;
      font-size: 1rem;

      ${breakpoint('md')} {
        font-size: 0.9rem;
      }
    }

    .hieroglyph {
      grid-area: hieroglyph;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 2.5rem;
      font-weight: 400;
      font-family: ${({ theme }) => theme.font.family.chn};
      letter-spacing: 1.5px;

      ${breakpoint('md')} {
        font-size: 2rem;
      }
    }

    .translate {
      grid-area: translate;
      text-align: center;

      display: ${({ isTranslate }) => (isTranslate ? 'flex' : 'none')};
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.palette.color.text};
      font-weight: 500;
      font-size: 0.9rem;
    }

    ${breakpoint('md')} {
      .pinyin {
        font-size: 0.9rem;
      }

      .hieroglyph {
        font-size: 1.8rem;
      }

      .translate {
        font-size: 0.7rem;
      }
    }
  }
`;

export const HieroglyphKeysScore = styled.div`
  margin-top: 25px;

  display: flex;
  flex-direction: row;
  gap: 25px;

  .correct {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 30px;
    border-radius: 25px;

    background-color: #00db6e68;
    box-shadow: ${({ theme }) => theme.palette.shadow.itemContent};
  }

  .wrong {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 30px;
    border-radius: 25px;

    background-color: #ff634789;
    box-shadow: ${({ theme }) => theme.palette.shadow.itemContent};
  }
`;

export const HieroglyphKeysAnswers = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

interface IAnswerProps {
  isAnswered: boolean;
  isCorrect: boolean;
  isWrong: boolean;
}
export const Answer = styled.div<IAnswerProps>`
  cursor: pointer;

  background-color: ${({ theme }) => theme.palette.bg.mainContent};
  box-shadow: ${({ theme }) => theme.palette.shadow.itemContent};
  border: solid 2px transparent;

  width: 150px;
  padding: 4px;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  ${breakpoint('md')} {
    width: 40%;
  }

  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => theme.palette.bg.highlight};
    border: solid 2px ${({ theme }) => theme.palette.bg.highlight};
  }

  .hieroglyph {
    display: none;
    font-family: ${({ theme }) => theme.font.family.chn};
    font-size: 1rem;
    font-weight: 500;
  }

  .pinyin {
    font-family: ${({ theme }) => theme.font.family.chn};
    font-weight: 500;
    font-size: 1rem;
  }

  .translate {
    display: none;
    font-size: 0.7rem;
    white-space: nowrap;
  }

  ${({ isAnswered, isCorrect, isWrong }) =>
    isAnswered
      ? `
      ${
        isCorrect
          ? `
        box-shadow: 0 0 5px #00db6e68;
        background-color: #00db6e68;
        &:hover {
          border: solid 2px transparent;
        }
        `
          : ''
      }

      ${
        isWrong
          ? `
        box-shadow: 0 0 5px #ff634789;
        background-color: #ff634789;
        &:hover {
          border: solid 2px transparent;
        }
        `
          : ''
      }
      transition: all 0.1s ease-in;

      .hieroglyph {
        display: flex;
      }
      .translate{
        display: flex;
      }
      `
      : ''}
`;

export const Hr = styled.hr`
  min-height: 4px;
  margin: 16px 0 32px 0;

  background: none;
  background-color: ${({ theme }) => theme.palette.divider};

  &.upper {
    margin: 25px 0;
    width: 30%;
    max-width: 400px;
    min-width: 250px;

    ${breakpoint('md')} {
      max-width: 250px;
    }
  }

  &.lower {
    margin: 25px 0;
    width: 70%;
    max-width: 1200px;
    min-width: 800px;

    ${breakpoint('md')} {
      max-width: 320px;
      min-width: 320px;
    }
  }
`;
