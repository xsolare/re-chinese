import styled from '@emotion/styled'
import { breakpoint } from '#/utils/theme'

export const HieroglyphKeysWrapper = styled.div`
  cursor: pointer;
  position: relative;
  margin: 10px;

  width: 170px;
  height: 170px;

  user-select: none;

  ${breakpoint('lg')} {
    width: 150px;
    height: 150px;
  }

  ${breakpoint('md')} {
    width: 120px;
    height: 120px;
  }

  ${breakpoint('sm')} {
    width: 90px;
    height: 90px;
    margin: 5px;
  }
`

type IHieroglyphKeysItemType = {
  isPinyin: boolean
  isTranslate: boolean
}
export const HieroglyphKeysItem = styled.div<IHieroglyphKeysItemType>`
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

    font-family: ${({ theme }) => theme.font.family.pinyin};
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

    font-family: ${({ theme }) => theme.font.family.chn};
    font-weight: 400;
    font-size: 2.5rem;

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

  .index {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;

    top: -8px;
    left: -8px;
    height: 30px;
    width: 30px;
    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border: 1px solid ${({ theme }) => theme.palette.border.content};
    border-radius: 50%;

    ${breakpoint('md')} {
      height: 22px;
      width: 22px;

      top: -4px;
      left: -4px;
    }
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
`
