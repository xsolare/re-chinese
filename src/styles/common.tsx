import styled from '@emotion/styled';

export const HieroglyphStyledHTML = styled.span`
  display: inline-block;

  color: ${({ theme }) => theme.palette.color.text};
  font-size: ${({ theme }) => theme.font.size.hieroglyph};
  font-family: ${({ theme }) => theme.font.family.chn};
  font-weight: 400;
  letter-spacing: 1.5px;

  margin: 4px 0;
  margin-right: 4px;

  .hieroglyph {
    padding: 1px 4px;
    border-radius: 5px;
    background: ${({ theme }) => theme.palette.bg.hieroglyph};
    border: 1px solid ${({ theme }) => theme.palette.border.hieroglyph};
  }
`;

export const HieroglyphTitleStyledHTML = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 10px;
  margin: 15px 0;
  white-space: nowrap;

  > span {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    top: -10px;
    left: -10px;
    height: 22px;
    width: 22px;
    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border: 1px solid ${({ theme }) => theme.palette.border.hieroglyph};
    font-family: ${({ theme }) => theme.font.family.chn};
    border-radius: 50%;
  }

  > h2 {
    border-radius: 10px;
    margin: 0;
    padding: 8px;
    line-height: 1;

    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 1.5px;
    background: ${({ theme }) => theme.palette.bg.hieroglyph};
    border: 1px solid ${({ theme }) => theme.palette.border.hieroglyph};
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 300;

    overflow: hidden;

    > :first-child {
      color: ${({ theme }) => theme.palette.color.subText};
      font-family: ${({ theme }) => theme.font.family.chn};
    }

    > :last-child {
      color: ${({ theme }) => theme.palette.color.text};
      font-weight: 500;

      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
`;

export const RuleStyledHTML = styled.div`
  display: flex;
  align-items: center;

  margin: 15px 0;

  > span {
    padding: 10px 15px;
    display: inline-block;

    color: ${({ theme }) => theme.palette.color.text};
    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border: 2px solid ${({ theme }) => theme.palette.border.hieroglyph};
    box-shadow: inset 0 0 2px ${({ theme }) => theme.palette.bg.hieroglyph};
    border-radius: 10px;

    font-family: ${({ theme }) => theme.font.family.text};
    font-weight: 500;
    font-size: 1rem;
  }

  > span > span {
    margin: 0 4px;
  }
`;

export const PinyinStyledHTML = styled.span`
  color: ${({ theme }) => theme.palette.color.subText};
  font-family: ${({ theme }) => theme.font.family.chn};
  font-weight: 500;
  font-size: 1rem;
`;

export const WarnStyledHTML = styled.span`
  display: inline-block;
  padding: 10px;
  background: ${({ theme }) => theme.palette.bg.mainContent};
  border-left: 2px solid ${({ theme }) => theme.palette.bg.highlight};
  border-radius: 4px 10px 10px 4px;
`;

export const ExampleStyledHTML = styled.div`
  padding-left: 10px;
  border-left: 2px dashed ${({ theme }) => theme.palette.border.hieroglyph};
`;

export const TranslateStyledHTML = styled.span`
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 500;
  font-size: 1rem;
`;

export const TextStyledHTML = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 300;
  font-size: 1rem;
`;

export const TextTabStyledHTML = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.palette.color.text};
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1rem;
  text-indent: 20px;
`;

export const HrStyledHTML = styled.hr`
  width: 100%;
  min-height: 4px;
  margin: 16px 0 32px 0;

  background: none;
  background-color: ${({ theme }) => theme.palette.divider};
`;
