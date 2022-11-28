import styled from '@emotion/styled';

//* --- ITEM --- *//
export const BrieflyExampleDialogStyled = styled.div`
  position: relative;

  height: 500px;

  width: 100%;
  max-width: 400px;
  min-width: 300px;

  background-color: ${({ theme }) => theme.palette.bg.modal};
  border: 1px solid ${({ theme }) => theme.palette.border.content};
  border-radius: 25px;
`;
