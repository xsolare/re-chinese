import React from 'react';
import type { ReactElement } from 'react';
import type { IHieroglyph } from '#/types/hieroglyph';
import type { NextPageWithLayout } from '#/pages/_app';
import { NextSeo } from 'next-seo';

//* Components
import { mockHieroglyph } from '#/utils/mock/hieroglyph';
import HieroglyphLayout from '#/components/layouts/hieroglyph/hieroglyph.layout';
import KeysTester from '../../../components/hieroglyph/keys-tester/keys-tester';

interface IPinyinProps {
  hieroglyphKeys: IHieroglyph[];
}

// Pinyin component
//* ------------------------------------------------------------------------------------------ *//
const HieroglyphTester: NextPageWithLayout<IPinyinProps> = (props) => {
  return (
    <>
      <NextSeo title="Иероглифы" description="Иероглифы китайского языка" />
      <KeysTester {...props} />
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
