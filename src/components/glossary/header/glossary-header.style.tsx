import { breakpoint } from '#/utils/theme';
import styled from '@emotion/styled';

interface IGlossaryHeaderStyled {
  isBriefly: boolean;
  isTester: boolean;
}
export const GlossaryHeaderStyled = styled.div<IGlossaryHeaderStyled>`
  position: relative;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'L T R';

  border-bottom: 1px solid ${({ theme }) => theme.palette.border.title};
  max-width: 1250px;
  margin: 0 auto 20px auto;
  padding: 5px 0;
  user-select: none;

  .title {
    grid-area: T;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    font-size: 2rem;
    margin: 0;
  }

  .option {
    &.left {
      grid-area: L;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
    }

    &.right {
      grid-area: R;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
    }

    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    .hsk {
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
      width: 75px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.palette.bg.mainContent};
      border: 1px solid ${({ theme }) => theme.palette.bg.highlight};
      border-radius: 25px;
    }

    .icon {
      width: 30px;
      height: 30px;
      cursor: pointer;

      :first-child {
        color: ${({ theme, isBriefly }) =>
          theme.palette.bg[isBriefly ? 'highlight' : 'hieroglyph']};
      }
      :last-child {
        color: ${({ theme, isTester }) => theme.palette.bg[isTester ? 'highlight' : 'hieroglyph']};
      }
    }
  }

  ${breakpoint('lg')} {
    grid-template-rows: 1fr 1.5fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'L R'
      'T T';

    padding: 0;

    .title {
      font-size: 1.5rem;
    }

    .option {
      padding: 5px 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.palette.border.title};
    }
  }
`;