import styled from '@emotion/styled';

export const TooltipStyled = styled.div`
  display: inline-block;

  .tooltip {
    border-radius: 6px;
    padding: 8px;
    font-size: 14px;
    line-height: 1;
    z-index: 99999;
    opacity: 0.95;
    box-shadow: 0px 0px 10px rgba(44, 38, 56, 0.02), 0px 8px 20px rgba(44, 38, 56, 0.04);
    max-width: 400px;

    color: ${({ theme }) => theme.palette.color.textInvert};
    font-family: ${({ theme }) => theme.font.family.chn};
    font-size: 1rem;
    background-color: ${({ theme }) => theme.palette.bg.modal};
  }
`;