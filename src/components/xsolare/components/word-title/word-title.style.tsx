import styled from '@emotion/styled';

export const WordTitleStyledHTML = styled.div`
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
    font-family: ${({ theme }) => theme.font.family.chn};
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
