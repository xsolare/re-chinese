import styled from '@emotion/styled'

export const DefaultStyled = styled.main`
  position: relative;
  width: 100%;
  z-index: 10;
  padding-top: var(--header-height);

  min-height: 100vh;
  height: 100%;

  @include mobile {
    padding-top: 0;
    padding-bottom: var(--header-height);
  }
`
