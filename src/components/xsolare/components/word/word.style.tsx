import styled from '@emotion/styled';

export const WordStyledHTML = styled.div`
  display: inline-block;

  color: ${({ theme }) => theme.palette.color.text};
  font-size: ${({ theme }) => theme.font.size.hieroglyph};
  font-family: ${({ theme }) => theme.font.family.chn};
  font-weight: 400;

  margin: 4px 0;
  margin-right: 4px;

  .hieroglyph {
    letter-spacing: 2px;
    padding: 1px 4px;
    border-radius: 5px;
    background: ${({ theme }) => theme.palette.bg.hieroglyph};
    border: 1px solid ${({ theme }) => theme.palette.border.hieroglyph};
  }
`;

export const TranslateStyledHTML = styled.span`
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
`;
