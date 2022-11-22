import React from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import type { IGlossaryItem } from '#/types/glossary';
import { NextSeo } from 'next-seo';
import { WordsContentStyled, WordsStyled } from '#/styles/words/words.style';
import WordsLayout from '#/components/layouts/words/words.layout';

interface IWordsProps {
  words: IGlossaryItem[];
}

// Words component
//* ------------------------------------------------------------------------------------------ *//
const Words: NextPageWithLayout<IWordsProps> = () => {
  return (
    <>
      <NextSeo title="Слова" description="Слова китайского языка" />
      <WordsStyled>
        <WordsContentStyled>HSK 1 2 3 4 5 6 7 8 9</WordsContentStyled>
      </WordsStyled>
    </>
  );
};

// Words.getInitialProps = async () => {};

Words.getLayout = function getLayout(page: ReactElement) {
  return <WordsLayout>{page}</WordsLayout>;
};

export default Words;
