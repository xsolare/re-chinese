import styled from '@emotion/styled';

interface IWordStyledProps {
  type: number;
}
export const WordStyled = styled.div<IWordStyledProps>`
  display: inline-block;

  color: ${({ theme }) => theme.palette.color.text};
  font-size: ${({ theme }) => theme.font.size.hieroglyph};
  font-family: ${({ theme }) => theme.font.family.chn};
  font-weight: 400;

  margin: 4px 0;
  margin-right: 4px;
`;

export const TranslateStyled = styled.span`
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export const PinyinStyled = styled.span`
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export const HieroglyphStyled = styled.span`
  letter-spacing: 2px;
  padding: 1px 4px;
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.bg.hieroglyph};
  border: 1px solid ${({ theme }) => theme.palette.border.hieroglyph};
`;
