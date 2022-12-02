import styled from '@emotion/styled';

//* --- ITEM --- *//
export const BrieflyExampleDialogStyled = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: auto;
  max-width: 1000px;
  min-width: 300px;

  min-height: 500px;
  height: auto;
  padding: 15px 25px;
  color: ${({ theme }) => theme.palette.color.textInvert};

  background-color: ${({ theme }) => theme.palette.bg.modal};
  border: 1px solid ${({ theme }) => theme.palette.border.content};
  border-radius: 25px;
`;
