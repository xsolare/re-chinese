import styled from '@emotion/styled'

export const HieroglyphLayoutStyled = styled.section`
  position: relative;

  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.sizes.header.height} - 10px);

  margin: 0 auto;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex;
`
