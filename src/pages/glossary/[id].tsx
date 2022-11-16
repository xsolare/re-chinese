import React, { useMemo } from 'react';
import type { IGlossaryContent } from '#/types/glossary';
import type { NextPageWithLayout } from '../_app';
import { NextSeo } from 'next-seo';
import {
  GlossaryContentItemStyled,
  GlossaryContentStyled,
  GlossaryStyled,
  GlossaryTitleStyled
} from '#/styles/glossary/glossary.style';
import { CgShortcut } from 'react-icons/cg';
import { observer } from 'mobx-react-lite';
import { parseGlossary } from '#/utils/parseTextToHtml';
import { glossary as g } from '#/utils/mock/glossary';
import { WordTitleStyled } from '#/components/xsolare/components/word-title/word-title.style';
import { useStore } from '#/store';
import GlossaryStore from '#/store/pages/glossary.store';

interface IGlossaryItemProps {
  glossary: IGlossaryContent;
}

// Glossary item component
//* ------------------------------------------------------------------------------------------ *//
const GlossaryItem: NextPageWithLayout<IGlossaryItemProps> = observer((props) => {
  const { glossary } = props;

  const store = useMemo(() => new GlossaryStore(), []);
  const GlossaryContent = useMemo(() => parseGlossary(glossary.text), []);

  const { wordStore } = useStore();
  console.log('wordStore', wordStore.state.type);

  const { setBriefly, state } = store;

  return (
    <>
      <NextSeo title="Статья" description="Статья" />
      <GlossaryStyled>
        <GlossaryTitleStyled isBriefly={state.isBriefly}>
          <div className="option">
            <CgShortcut className="icon" onClick={() => setBriefly(!state.isBriefly)} />
          </div>
          <h1>{glossary.title}</h1>
          <div className="option">
            <div className="hsk">{`HSK-${glossary.hsk}`}</div>
          </div>
        </GlossaryTitleStyled>
        <GlossaryContentStyled>
          {/* Full */}
          {!state.isBriefly && GlossaryContent}

          {/* Briefly */}
          {state.isBriefly &&
            glossary.briefly.map((b, index) => (
              <GlossaryContentItemStyled key={b.id}>
                <WordTitleStyled>
                  <span>{index + 1}</span>
                  <h2>{b.hieroglyph}</h2>
                  <div>
                    <span>{b.pinyin}</span>
                    <span>{b.translate}</span>
                  </div>
                </WordTitleStyled>
              </GlossaryContentItemStyled>
            ))}
        </GlossaryContentStyled>
      </GlossaryStyled>
    </>
  );
});

GlossaryItem.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const glossaryContent = await new Promise<IGlossaryContent>((r) =>
    r(g.find((f) => f.id === query?.id) as IGlossaryContent)
  );

  return {
    glossary: glossaryContent
  };
};

export default GlossaryItem;
