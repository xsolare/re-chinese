import React from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import type { IHieroglyph } from '#/types/hieroglyph';
import { NextSeo } from 'next-seo';
import { mockHieroglyph } from './mock';

//* Components
import PageLayout from '#/components/layouts/page.layout';
import HieroglyphKey from '#/components/hieroglyph/key-item';
import {
  HieroglyphKeysControl,
  HieroglyphKeysDescription,
  HieroglyphKeysList
} from '#/styles/pages/hieroglyph.style';

interface IPinyinProps {
  hieroglyph: IHieroglyph[];
}

// Pinyin component
//* ------------------------------------------------------------------------------------------ *//
const Hieroglyph: NextPageWithLayout<IPinyinProps> = (props) => {
  const { hieroglyph } = props;

  return (
    <>
      <NextSeo title="Hieroglyph" description="Hieroglyph page" />
      <HieroglyphKeysDescription>1</HieroglyphKeysDescription>
      <HieroglyphKeysControl>2</HieroglyphKeysControl>
      <HieroglyphKeysList>
        {hieroglyph.map((h) => (
          <HieroglyphKey key={h.id} hieroglyph={h} />
        ))}
      </HieroglyphKeysList>
    </>
  );
};

Hieroglyph.getInitialProps = async () => {
  return {
    hieroglyph: mockHieroglyph
  };
};

Hieroglyph.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Hieroglyph;
