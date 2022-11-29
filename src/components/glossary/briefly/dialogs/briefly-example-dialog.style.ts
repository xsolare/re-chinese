import styled from '@emotion/styled';

//* --- ITEM --- *//
export const BrieflyExampleDialogStyled = styled.div`
  position: relative;

  width: 90vw;
  max-width: 1000px;
  min-width: 300px;

  min-height: 500px;
  height: auto;
  padding: 15px;
  color: ${({ theme }) => theme.palette.color.textInvert};

  background-color: ${({ theme }) => theme.palette.bg.modal};
  border: 1px solid ${({ theme }) => theme.palette.border.content};
  border-radius: 25px;
`;
