import styled from '@emotion/styled'
import { breakpoint } from '#/utils/theme'

export const GlossaryContentStyled = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  .title {
    font-weight: 500;
  }

  p {
    margin-bottom: 0;
  }

  .wrapper {
    padding: 15px 20px;
    width: 33%;

    ${breakpoint('xl')} {
      width: 50%;
    }

    ${breakpoint('md')} {
      width: 100%;
    }
  }
`

export const GlossaryContentItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  width: 33%;

  ${breakpoint('xl')} {
    width: 50%;
  }

  ${breakpoint('md')} {
    width: 100%;
  }

  &:hover {
    > svg {
      opacity: 0.8;
    }
  }

  > svg {
    width: 35px;
    height: 35px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.1s ease-in;
  }
`

export const GlossaryStyled = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;

  ${breakpoint('sm')} {
    margin-top: 10px;
  }
`
