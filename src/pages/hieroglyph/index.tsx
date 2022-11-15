import React from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import type { IHieroglyph } from '#/types/hieroglyph';
import { NextSeo } from 'next-seo';
import { mockHieroglyph } from '#/utils/mock/hieroglyph';

//* Components
import HieroglyphKeys from '#/components/hieroglyph/hieroglyph-keys/hieroglyph-keys';
import HieroglyphLayout from '#/components/layouts/hieroglyph/hieroglyph.layout';

interface IPinyinProps {
  hieroglyphKeys: IHieroglyph[];
}

// Pinyin component
//* ------------------------------------------------------------------------------------------ *//
const Hieroglyph: NextPageWithLayout<IPinyinProps> = (props) => {
  const { hieroglyphKeys } = props;

  return (
    <>
      <NextSeo title="Иероглифы" description="Иероглифы китайского языка" />
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
  return <HieroglyphLayout>{page}</HieroglyphLayout>;
};

export default Hieroglyph;
