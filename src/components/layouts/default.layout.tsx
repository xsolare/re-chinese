import React, { useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';

//* Styles
import { DefaultStyled } from '#/styles/components/layouts/default.style';

//* Components
import Header from '../header/header';
import { store } from '#/store';

// Default layout
//* ------------------------------------------------------------------------------------------ *//
const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    store.appStore.updateViewport();
    window.onresize = () => {
      store.appStore.updateViewport();
    };
  }, []);

  return (
    <>
      <Header />
      <DefaultStyled>{children}</DefaultStyled>
    </>
  );
};
export default DefaultLayout;
