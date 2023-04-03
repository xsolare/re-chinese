import type { FC, PropsWithChildren } from 'react'
import React from 'react'

//* Styles
import GlossaryHeader from '#/components/glossary/header/glossary-header'
import { GlossaryContentStyled } from '#/styles/glossary/glossary.style'

//* Components
import { GlossaryUrlProvider } from './glossary-url.provider'
import { GlossaryUrlLayoutStyled } from './glossary-url.style'

// Glossary url layout
//* ------------------------------------------------------------------------------------------ *//
const GlossaryUrlLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GlossaryUrlProvider>
      <GlossaryUrlLayoutStyled>
        <GlossaryHeader />
        <GlossaryContentStyled>{children}</GlossaryContentStyled>
      </GlossaryUrlLayoutStyled>
    </GlossaryUrlProvider>
  )
}

export default GlossaryUrlLayout
