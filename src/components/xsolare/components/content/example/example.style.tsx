import { breakpoint } from '#/utils/theme';
import styled from '@emotion/styled';

type IExampleStyled = {
  row?: string;
};
export const ExampleStyled = styled.div<IExampleStyled>`
  margin: 10px 0;

  > div {
    border-left: 2px dashed ${({ theme }) => theme.palette.border.hieroglyph};
    padding-left: 14px;
  }

  ${({ row }) =>
    row
      ? `
    columns: 2;
    
    ${breakpoint('md')}{
      columns: 1;
    };
  `
      : ''}
`;
