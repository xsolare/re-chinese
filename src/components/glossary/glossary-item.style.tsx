import styled from '@emotion/styled';

export const GlossaryItemStyled = styled.div`
  > a {
    display: flex;
    align-items: center;

    height: 100%;
    width: 100%;
  }

  position: relative;

  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.bg.mainContent};
  border: 1px solid ${({ theme }) => theme.palette.border.header};
  border-radius: 10px;

  .title {
    padding: 0 15px;
    color: ${({ theme }) => theme.palette.color.text};
    font-size: 1rem;
    font-weight: 300;

    overflow: hidden;
    text-overflow: ellipsis;
    word-break: none;
    white-space: nowrap;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .badges {
    &-header,
    &-footer {
      position: absolute;
      display: flex;
      flex-direction: row;
      width: 100%;

      .hsk {
        position: relative;
        display: inline-block;
        border-radius: 15px;

        > svg {
          color: ${({ theme }) => theme.palette.bg.highlight};

          width: 40px;
          height: 40px;
        }

        > div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 5px;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
        }
      }
    }

    &-header {
      top: 0;
      left: 0;
    }

    &-footer {
      bottom: -10px;
      right: -15px;
      justify-content: flex-end;
    }

    color: ${({ theme }) => theme.palette.bg.highlight};
    font-size: 1rem;
    font-weight: 300;
  }
`;
