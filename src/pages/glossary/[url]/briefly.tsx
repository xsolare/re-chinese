import React from 'react';
import type { IGlossaryContent } from '#/types/glossary';
import type { NextPageWithLayout } from '#/pages/_app';
import { NextSeo } from 'next-seo';
import { observer } from 'mobx-react-lite';
import { GlossaryBriefly } from '#/components/glossary/sections';
import { glossary as g } from '#/utils/mock/glossary';
import { useGlossaryUrlContext } from '#/components/layouts/glossary/url/glossary-url.provider';
import GlossaryUrlLayout from '#/components/layouts/glossary/url/glossary-url.layout';
import { Sections } from '#/store/pages/glossary.store';

interface IGlossaryBrieflyProps {
  glossary: IGlossaryContent;
}

// Glossary briefly
//* ------------------------------------------------------------------------------------------ *//
const GlossaryBrieflySection: NextPageWithLayout<IGlossaryBrieflyProps> = ({ glossary }) => {
  const { pageStore, setupGlossaryBase } = useGlossaryUrlContext();
  const {
    state: { glossaryBase }
  } = pageStore;

  setupGlossaryBase(glossary, Sections.Briefly);

  return (
    <>
      <NextSeo title={glossaryBase.title} description={glossaryBase.description} />
      <GlossaryBriefly content={glossary.briefly} />
    </>
  );
};

GlossaryBrieflySection.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const glossaryContent = await new Promise<IGlossaryContent>((r) =>
    r(g.find((f) => f.url === query?.url) as IGlossaryContent)
  );

  return {
    glossary: glossaryContent
  };
};

GlossaryBrieflySection.getLayout = function getLayout(page: React.ReactElement) {
  return <GlossaryUrlLayout>{page}</GlossaryUrlLayout>;
};

export default observer(GlossaryBrieflySection);
