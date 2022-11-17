import { breakpoint } from '#/utils/theme';
import styled from '@emotion/styled';

type IWarnStyled = {
  direction?: string;
};
export const WarnStyled = styled.span<IWarnStyled>`
  display: inline-block;
  padding: 10px;
  background: ${({ theme }) => theme.palette.bg.mainContent};
  border-left: 4px solid ${({ theme }) => theme.palette.bg.highlight};
  border-radius: 6px 12px 12px 6px;

  /* ${({ row }) =>
    row
      ? `
    columns: 2;
    
    ${breakpoint('md')}{
      columns: 1;
    };
  `
      : ''} */
`;
