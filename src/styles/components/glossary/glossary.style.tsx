import styled from '@emotion/styled';

export const GlossaryItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px;

  .title {
    display: flex;

    color: ${({ theme }) => theme.palette.color.text};
    font-size: 1rem;
    font-weight: 300;

    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .badges {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    color: ${({ theme }) => theme.palette.bg.highlight};
    font-size: 1rem;
    font-weight: 300;

    min-height: 20px;
  }
`;
