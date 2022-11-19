import React from 'react';
import type { HSK } from '#/types/word';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import type { IWordType } from '#/store/word';
import { NextSeo } from 'next-seo';
import { WordsContentStyled, WordsStyled } from '#/styles/words/words.style';
import { HSK1 } from '#/utils/mock/words/hsk1';
import { Word } from '#/components/xsolare';
import { parseWord } from '#/utils/parseTextToHtml';
import WordsLayout from '#/components/layouts/words/words.layout';

interface IWordsHSKProps {
  words: HSK[];
}

// Words HSK component
//* ------------------------------------------------------------------------------------------ *//
const WordsHSK: NextPageWithLayout<IWordsHSKProps> = (props) => {
  const { words } = props;

  return (
    <>
      <NextSeo title="Слова" description="Слова китайского языка" />
      <WordsStyled>
        <WordsContentStyled>
          {words.map(({ uid, pinyin, translate, cn }) => (
            <Word fixed={2} pinyin={pinyin} translate={parseWord(translate) as string} key={uid}>
              {cn}
            </Word>
          ))}
        </WordsContentStyled>
      </WordsStyled>
    </>
  );
};

WordsHSK.getInitialProps = async (ctx) => {
  const { query } = ctx;
  if (query.hsk === 'hsk-1') {
    return {
      words: HSK1
    };
  }

  return {
    words: [],
    redirect: {
      permanent: true,
      destination: '/words'
    }
  };
};

WordsHSK.getLayout = function getLayout(page: ReactElement) {
  return <WordsLayout>{page}</WordsLayout>;
};

export default WordsHSK;
