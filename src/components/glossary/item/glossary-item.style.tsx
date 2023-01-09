import styled from '@emotion/styled';
import { breakpoint } from '#/utils/theme';

//* --- ITEM --- *//
export const GlossaryItemStyled = styled.div`
  > a {
    display: flex;
    align-items: center;

    height: 100%;
    width: 100%;
  }

  position: relative;

  height: 62px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.bg.mainContent};
  border: 1px solid ${({ theme }) => theme.palette.border.content};
  border-radius: 10px;

  .title {
    padding: 0 20px;
    color: ${({ theme }) => theme.palette.color.text};
    font-size: 1rem;
    font-weight: 300;

    height: 100%;
    width: 100%;
    line-height: 62px;

    overflow: hidden;
    text-overflow: ellipsis;
    word-break: none;
    white-space: nowrap;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .badges {
    &-header,
    &-footer {
      position: absolute;
      display: flex;
      flex-direction: row;
      width: calc(100% + 36px);
    }

    &-header {
      top: -18px;
      left: -18px;
      justify-content: space-between;
    }

    &-footer {
      bottom: -18px;
      right: -18px;
      justify-content: flex-start;
      align-items: flex-end;
    }

    color: ${({ theme }) => theme.palette.bg.highlight};
    font-size: 1rem;
    font-weight: 300;
  }
`;

//* --- HSK --- *//
interface IGlossaryItemHskProps {
  hsk: string;
}
export const GlossaryItemHskStyled = styled.div<IGlossaryItemHskProps>`
  position: relative;
  display: inline-block;
  border-radius: 15px;

  > svg {
    width: 45px;
    height: 45px;

    ${breakpoint('md')} {
      width: 40px;
      height: 40px;
    }

    ${breakpoint('sm')} {
      width: 35px;
      height: 35px;
    }

    > path {
      :first-child {
        color: ${({ theme }) => theme.palette.bg.hsk};
      }

      :last-child {
        color: ${({ theme }) => theme.palette.border.content};
      }
    }
  }

  > div {
    color: ${({ theme }) => theme.palette.border.content};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 900px;
    height: 100%;
    top: 4px;
    right: 1px;
    font-family: 'Rubik Bubbles';
    position: absolute;

    ${breakpoint('md')} {
      font-size: 0.95rem;
      top: 3px;
    }

    ${breakpoint('sm')} {
      font-size: 0.9rem;
      top: 2px;
    }

    ${breakpoint('sm')} {
      font-size: 1rem;
      top: 2px;
    }
  }
`;

//* --- TAGS --- *//

export const GlossaryItemyTagsStyled = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 15px;

  > span {
    color: ${({ theme }) => theme.palette.color.subText};
    border: 1px solid ${({ theme }) => theme.palette.border.content};
    background-color: ${({ theme }) => theme.palette.bg.mainContent};

    font-size: 0.8rem;
    border-radius: 15px;
    padding: 2px 10px;
    font-family: 'Rubik Bubbles';
  }
`;
