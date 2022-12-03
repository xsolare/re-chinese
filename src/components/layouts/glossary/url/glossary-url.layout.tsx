import React from 'react';
import type { FC, PropsWithChildren } from 'react';

//* Styles
import { GlossaryUrlLayoutStyled } from './glossary-url.style';
import { GlossaryContentStyled } from '#/styles/glossary/glossary.style';

//* Components
import GlossaryHeader from '#/components/glossary/header/glossary-header';
import { GlossaryUrlProvider } from './glossary-url.provider';

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
  );
};

export default GlossaryUrlLayout;
