import styled from '@emotion/styled';
import { breakpoint } from '#/utils/theme';

export const WordsStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 25px;

  ${breakpoint('sm')} {
    margin-top: 5px;
  }
`;

export const WordsContentStyled = styled.div`
  position: relative;

  max-width: 1200px;

  columns: 3;

  ${breakpoint('lg')} {
    columns: 2;
  }

  ${breakpoint('md')} {
    columns: 1;
  }

  > div {
    margin: 20px auto;
    display: block;

    > div {
      padding-right: 10px;
    }
  }
`;
