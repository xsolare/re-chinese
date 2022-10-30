import styled from '@emotion/styled';

export const HieroglyphStyledHTML = styled.span`
  display: inline-block;
  font-weight: 300;

  color: ${({ theme }) => theme.palette.color.text};
  font-size: ${({ theme }) => theme.font.size.hieroglyph};
  font-family: ${({ theme }) => theme.font.family.chn};
  letter-spacing: 1.5px;

  margin: 4px 0;
  margin-right: 4px;

  > span {
    padding: 1px 4px;
    border-radius: 5px;
    background: ${({ theme }) => theme.palette.bg.hieroglyph};
    border: 1px solid ${({ theme }) => theme.palette.border.hieroglyph};
  }
`;

export const PinyinStyledHTML = styled.span`
  color: ${({ theme }) => theme.palette.color.text};
  font-family: ${({ theme }) => theme.font.family.chn};
  font-weight: 500;
  font-size: 1rem;
`;

export const TranslateStyledHTML = styled.span`
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 500;
  font-size: 1rem;
`;

export const TextTabStyledHTML = styled.p`
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 300;
  font-size: 1rem;
  text-indent: 20px;
`;
