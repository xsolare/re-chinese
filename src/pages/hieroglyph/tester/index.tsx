import React from 'react';
import type { ReactElement } from 'react';
import type { IHieroglyph } from '#/types/hieroglyph';
import type { NextPageWithLayout } from '#/pages/_app';
import { NextSeo } from 'next-seo';

//* Components
import { mockHieroglyph } from '#/utils/mock/hieroglyph';
import HieroglyphLayout from '#/components/layouts/hieroglyph/hieroglyph.layout';

interface IPinyinProps {
  hieroglyphKeys: IHieroglyph[];
}

// Pinyin component
//* ------------------------------------------------------------------------------------------ *//
const HieroglyphTester: NextPageWithLayout<IPinyinProps> = (props) => {
  const { hieroglyphKeys } = props;

  return (
    <>
      <NextSeo title="Иероглифы" description="Иероглифы китайского языка" />
      <div>1</div>
    </>
  );
};

HieroglyphTester.getInitialProps = async () => {
  return {
    hieroglyphKeys: mockHieroglyph
  };
};

HieroglyphTester.getLayout = function getLayout(page: ReactElement) {
  return <HieroglyphLayout>{page}</HieroglyphLayout>;
};

export default HieroglyphTester;
