import styled from '@emotion/styled';
import { breakpoint } from '#/utils/theme';

export const GlossaryContentStyled = styled.div`
  position: relative;

  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0 25px;

  p {
    margin-bottom: 0;
  }
`;

interface IGlossaryTitleStyled {
  isBriefly: boolean;
}

export const GlossaryTitleStyled = styled.div<IGlossaryTitleStyled>`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  border-bottom: 1px solid ${({ theme }) => theme.palette.border.title};
  max-width: 1250px;
  margin: 0 auto 20px auto;
  padding: 5px 0;

  > h1 {
    font-size: 2rem;
    margin: 0;
  }

  .option {
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

      color: ${({ theme, isBriefly }) => theme.palette.bg[isBriefly ? 'highlight' : 'hieroglyph']};
    }
  }

  ${breakpoint('sm')} {
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto 10px auto;

    .option {
      &:first-child {
        width: auto;
      }
      &:last-child {
        width: auto;
        margin-left: auto;
      }
    }

    > h1 {
      font-size: 1.5rem;
    }
  }
`;

export const GlossaryStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 25px;

  ${breakpoint('sm')} {
    margin-top: 5px;
  }
`;

export const GlossaryItemWrapperStyled = styled.div`
  border: 2px solid ${({ theme }) => theme.palette.border.header};
  background-color: ${({ theme }) => theme.palette.bg.mainContent};
  border-radius: 15px;
  width: 250px;
  height: 80px;
  padding: 5px;
`;
