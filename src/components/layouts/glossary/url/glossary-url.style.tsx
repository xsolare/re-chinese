import styled from '@emotion/styled';
import { breakpoint } from '#/utils';

export const GlossaryUrlLayoutStyled = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 20px;

  ${breakpoint('sm')} {
    margin-top: 10px;
  }
`;
