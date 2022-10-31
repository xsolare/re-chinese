import styled from '@emotion/styled';

export const GlossaryItemStyled = styled.div`
  position: relative;
  padding: 5px;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

export const GlossaryItemContentStyled = styled.div`
  position: relative;

  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  p {
    margin-bottom: 0;
  }
`;

export const GlossaryTitleStyled = styled.div`
  position: relative;

  max-width: 1250px;
  margin: 0 auto 25px auto;

  > h1 {
    font-size: 2rem;
  }

  .option {
    width: 100px;

    .hsk {
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
      width: 75px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.palette.bg.mainContent};
      border: 1px solid ${({ theme }) => theme.palette.bg.highlight};
      border-radius: 25px;
    }

    .icon {
      width: 30px;
      height: 30px;
    }
  }

  border-bottom: 1px solid ${({ theme }) => theme.palette.border.title};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
