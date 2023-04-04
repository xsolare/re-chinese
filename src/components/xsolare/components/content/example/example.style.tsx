import styled from '@emotion/styled'
import { breakpoint } from '#/utils/theme/emotion-theme'

type IExampleStyled = {
  row?: string
}
export const ExampleStyled = styled.div<IExampleStyled>`
  margin: 10px 0;

  > div {
    border-left: 2px dashed ${({ theme }) => theme.palette.border.hieroglyph};
    padding-left: 14px;
  }

  ${({ row }) =>
    row
      ? `
    s: 2;
    column
    ${breakpoint('md')}{
      columns: 1;
    };
  `
      : ''}
`
