import React from 'react';
import type { FC, PropsWithChildren } from 'react';

//* Styles
import { PageStyled } from '#/components/layouts/page.style';

// Page layout
//* ------------------------------------------------------------------------------------------ *//
const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <PageStyled>{children}</PageStyled>;
};
export default PageLayout;
