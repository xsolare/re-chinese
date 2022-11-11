import React from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import type { IHieroglyph } from '#/types/hieroglyph';
import { NextSeo } from 'next-seo';
import { mockHieroglyph } from '../../utils/mock/hieroglyph';

//* Components
import { TabsSlider } from '#/components/xsolare';
import PageLayout from '#/components/layouts/page.layout';
import HieroglyphKeys from '#/components/hieroglyph/hieroglyph-keys/hieroglyph-keys';

interface IPinyinProps {
  hieroglyphKeys: IHieroglyph[];
}

// Pinyin component
//* ------------------------------------------------------------------------------------------ *//
const Hieroglyph: NextPageWithLayout<IPinyinProps> = (props) => {
  const { hieroglyphKeys } = props;

  return (
    <>
      <NextSeo title="Hieroglyph" description="Hieroglyph page" />
      <TabsSlider options={[{ value: 'Ключи' }]} headerText="Ключи китайского языка" />
      <HieroglyphKeys hieroglyphKeys={hieroglyphKeys} />
    </>
  );
};

Hieroglyph.getInitialProps = async () => {
  return {
    hieroglyphKeys: mockHieroglyph
  };
};

Hieroglyph.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Hieroglyph;
