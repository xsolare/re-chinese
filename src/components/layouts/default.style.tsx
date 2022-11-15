import styled from '@emotion/styled';

export const DefaultStyled = styled.main`
  position: relative;
  z-index: 1;

  min-height: 100vh;
  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.palette.bg.main};
  color: ${({ theme }) => theme.palette.color.text};

  padding: 10px;
  padding-top: ${({ theme }) => theme.sizes.header.height};
`;
