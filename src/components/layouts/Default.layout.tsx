import React from 'react';
import type { FC, PropsWithChildren } from 'react';

//* Components
import Header from '../header/Header.component';

//* Styles
import { DefaultStyled } from '../../styles/components/layouts/Default.style';

// ^ Default layout
//* ------------------------------------------------------------------------------------------ *//
const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <DefaultStyled>{children}</DefaultStyled>
    </>
  );
};
export default DefaultLayout;
