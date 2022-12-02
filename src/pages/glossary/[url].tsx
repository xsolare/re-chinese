import React from 'react';
import type { IGlossaryContent } from '#/types/glossary';
import type { NextPageWithLayout } from '../_app';
import { NextSeo } from 'next-seo';
import { GlossaryContentStyled, GlossaryStyled } from '#/styles/glossary/glossary.style';
import { observer } from 'mobx-react-lite';
import { glossary as g } from '#/utils/mock/glossary';
import { useNewStore } from '#/components/xsolare/helpers';
import GlossaryStore from '#/store/pages/glossary.store';
import GlossaryHeader from '#/components/glossary/header/glossary-header';
import { GlossaryText, GlossaryBriefly, GlossaryTester } from '#/components/glossary/sections/';

interface IGlossaryItemProps {
  glossary: IGlossaryContent;
}

// Glossary item component
//* ------------------------------------------------------------------------------------------ *//
const GlossaryItem: NextPageWithLayout<IGlossaryItemProps> = ({ glossary: initGlossary }) => {
  const store = useNewStore(GlossaryStore, initGlossary);
  const { glossary, isGlossaryPage, isBrieflyPage, isTestPage } = store;

  return (
    <>
      <NextSeo title={glossary.title} description={glossary.description} />
      <GlossaryStyled>
        <GlossaryHeader pageStore={store} />
        <GlossaryContentStyled>
          <GlossaryText isHidden={!isGlossaryPage} content={glossary.text} />
          <GlossaryBriefly isHidden={!isBrieflyPage} content={glossary.briefly} />
          <GlossaryTester isHidden={!isTestPage} />
        </GlossaryContentStyled>
      </GlossaryStyled>
    </>
  );
};

GlossaryItem.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const glossaryContent = await new Promise<IGlossaryContent>((r) =>
    r(g.find((f) => f.url === query?.url) as IGlossaryContent)
  );

  return {
    glossary: glossaryContent
  };
};

export default observer(GlossaryItem);
