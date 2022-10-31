import React, { useMemo } from 'react';
import type { NextPage } from 'next';
import type { IGlossaryContent } from '#/types/glossary';
import { NextSeo } from 'next-seo';
import {
  GlossaryContentStyled,
  GlossaryStyled,
  GlossaryTitleStyled
} from '#/styles/pages/glossary.style';
import { glossary as g } from '../../utils/mock/glossary';
import { parseGlossary } from '#/utils/parseTextToHtml';
import { CgShortcut } from 'react-icons/cg';
import GlossaryStore from './store';
import { observer } from 'mobx-react-lite';
import { HieroglyphTitleStyledHTML } from '#/styles/common';
import PageLayout from '#/components/layouts/page.layout';
import type { NextPageWithLayout } from '../_app';

interface IGlossaryItemProps {
  glossary: IGlossaryContent;
}

// Glossary item component
//* ------------------------------------------------------------------------------------------ *//
const GlossaryItem: NextPageWithLayout<IGlossaryItemProps> = observer((props) => {
  const { glossary } = props;

  const store = useMemo(() => new GlossaryStore(), []);
  const { setBriefly, state } = store;

  return (
    <>
      <NextSeo title="Glossary item content" description="Glossary item content page" />
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
          {!state.isBriefly && parseGlossary(glossary.text)}

          {/* Briefly */}
          {state.isBriefly &&
            glossary.briefly.map((b, index) => (
              <HieroglyphTitleStyledHTML key={b.id}>
                <span>{index}</span>
                <h2>{b.hieroglyph}</h2>
                <div>
                  <span>{b.pinyin}</span>
                  <span>{b.translate}</span>
                </div>
              </HieroglyphTitleStyledHTML>
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

GlossaryItem.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default GlossaryItem;
