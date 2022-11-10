import { breakpoint } from '#/utils/theme';
import styled from '@emotion/styled';

export const HieroglyphKeysWrapper = styled.div`
  cursor: pointer;
  position: relative;
  margin: 5px;

  width: 120px;
  height: 120px;

  ${breakpoint('md')} {
    width: 90px;
    height: 90px;
  }
`;

export const HieroglyphKeysItem = styled.div`
  overflow: hidden;

  background-color: ${({ theme }) => theme.palette.bg.mainContent};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
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

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.palette.color.pinyin};
    font-family: ${({ theme }) => theme.font.family.chn};
    font-weight: 400;
    font-size: 1rem;
  }

  .hieroglyph {
    grid-area: hieroglyph;

    font-size: 2rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.font.family.chn};
    letter-spacing: 1.5px;
  }

  .translate {
    grid-area: translate;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.palette.color.text};
    font-weight: 500;
    font-size: 0.9rem;
  }

  .index {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;

    top: -4px;
    left: -4px;
    height: 22px;
    width: 22px;
    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border: 1px solid ${({ theme }) => theme.palette.border.content};
    border-radius: 50%;
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

    .index {
      top: -2px;
      left: -2px;
      height: 20px;
      width: 20px;
      font-size: 0.5rem;
      letter-spacing: 0px;
    }
  }
`;
