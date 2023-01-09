import type { NextPageWithLayout } from '#/pages/_app';
import type { IHieroglyph } from '#/types/hieroglyph';
import type { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import React from 'react';

//* Components
import KeysTester from '#/components/hieroglyph/keys-tester/keys-tester';
import HieroglyphLayout from '#/components/layouts/hieroglyph/hieroglyph.layout';
import { mockHieroglyph } from '#/utils/mock/hieroglyph';

interface IPinyinProps {
  hieroglyphKeys: IHieroglyph[];
}

// Pinyin component
//* ------------------------------------------------------------------------------------------ *//
const HieroglyphTester: NextPageWithLayout<IPinyinProps> = (props) => {
  return (
    <>
      <NextSeo
        title="Карточки китайских ключей"
        description="Проверка знаний ключей китайского языка"
      />
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
