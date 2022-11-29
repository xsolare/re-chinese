import React, { useMemo } from 'react';
import type { IGlossaryContent } from '#/types/glossary';
import type { NextPageWithLayout } from '../_app';
import { NextSeo } from 'next-seo';
import {
  GlossaryContentStyled,
  GlossaryStyled,
  GlossaryTitleStyled
} from '#/styles/glossary/glossary.style';
import { CgShortcut } from 'react-icons/cg';
import { TbTestPipe } from 'react-icons/tb';
import { observer } from 'mobx-react-lite';
import { parseGlossary } from '#/utils/parseTextToHtml';
import { glossary as g } from '#/utils/mock/glossary';
import { useNewStore } from '#/components/xsolare/helpers';
import GlossaryStore from '#/store/pages/glossary.store';
import GlossaryBriefly from '#/components/glossary/briefly/glossary-briefly';

interface IGlossaryItemProps {
  glossary: IGlossaryContent;
}

// Glossary item component
//* ------------------------------------------------------------------------------------------ *//
const GlossaryItem: NextPageWithLayout<IGlossaryItemProps> = observer((props) => {
  const { glossary } = props;

  const GlossaryContent = useMemo(() => parseGlossary(glossary.text), []);

  const store = useNewStore(GlossaryStore);
  const { setBriefly, setTester, state, isBrieflyPage, isGlossaryPage, isTestPage } = store;
  const { isBriefly, isTester } = state;

  return (
    <>
      <NextSeo title={glossary.title} description={glossary.description} />
      <GlossaryStyled>
        <GlossaryTitleStyled isBriefly={isBriefly} isTester={isTester}>
          <div className="option left">
            <CgShortcut className="icon" onClick={() => setBriefly(!isBriefly)} />
            <TbTestPipe className="icon" onClick={() => setTester(!isTester)} />
          </div>
          <h1 className="title">{glossary.title}</h1>
          <div className="option right">
            <div className="hsk">{`HSK-${glossary.hsk}`}</div>
          </div>
        </GlossaryTitleStyled>
        <GlossaryContentStyled>
          {/* Full */}
          {isGlossaryPage && GlossaryContent}
          {/* Briefly */}
          {isBrieflyPage && <GlossaryBriefly content={glossary.briefly} />}
          {/* Test */}
          {isTestPage && <div>NOT IMPLEMENTED</div>}
        </GlossaryContentStyled>
      </GlossaryStyled>
    </>
  );
});

GlossaryItem.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const glossaryContent = await new Promise<IGlossaryContent>((r) =>
    r(g.find((f) => f.url === query?.url) as IGlossaryContent)
  );

  return {
    glossary: glossaryContent
  };
};

export default GlossaryItem;
