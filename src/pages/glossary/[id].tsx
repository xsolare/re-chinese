/* eslint-disable react/no-danger */
import React from 'react';
import type { NextPage } from 'next';
import type { IGlossaryContent } from '#/types/glossary';
import { NextSeo } from 'next-seo';
import {
  GlossaryItemContentStyled,
  GlossaryItemStyled,
  GlossaryTitleStyled
} from '#/styles/glossary/glossary.style';
import { glossary as g } from '../../utils/mock/glossary';
import { parseGlossary } from '#/utils/parseTextToHtml';
import { SiFurrynetwork } from 'react-icons/si';

interface IGlossaryItemProps {
  glossary: IGlossaryContent;
}

// Glossary item component
//* ------------------------------------------------------------------------------------------ *//
const GlossaryItem: NextPage<IGlossaryItemProps> = (props) => {
  const { glossary } = props;

  return (
    <>
      <NextSeo title="Glossary item content" description="Glossary item content page" />
      <GlossaryItemStyled>
        <GlossaryTitleStyled>
          <div className="option">
            <SiFurrynetwork className="icon" />
          </div>
          <h1>{glossary.title}</h1>
          <div className="option">
            <div className="hsk">{`HSK ${glossary.hsk}`}</div>
          </div>
        </GlossaryTitleStyled>
        <GlossaryItemContentStyled>{parseGlossary(glossary.text)}</GlossaryItemContentStyled>
      </GlossaryItemStyled>
    </>
  );
};

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
