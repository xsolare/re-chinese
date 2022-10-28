import React from 'react';
import type { FC, PropsWithChildren } from 'react';

//* Styles
import { PageStyled } from '#/styles/components/layouts/page.style';

//* Components
// import { TabsSlider } from '#/xsolare';
// import Link from 'next/link';

// Page layout
//* ------------------------------------------------------------------------------------------ *//
const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  // const tabsSliderProps = {
  //   options: [
  //     { value: '/', additional: { url: '/' } },
  //     { value: 'Глоссарий', additional: { url: '/glossary' } },
  //     { value: 'Пиньин', additional: { url: '/pinyin' } }
  //   ],
  //   renderOption: (item) => <Link href={item.additional?.url}>{item.value}</Link>
  // };

  return (
    <PageStyled>
      {/* <TabsSlider {...tabsSliderProps} /> */}
      {children}
    </PageStyled>
  );
};
export default PageLayout;
