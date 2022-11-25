import React from 'react';
import type { FC } from 'react';
import type { IGlossaryBriefly } from '#/types/glossary';
import { GlossaryContentItemStyled } from '#/styles/glossary/glossary.style';
import { WordTitle } from '#/components/xsolare';
import { useNewStore } from '#/components/xsolare/helpers';

interface IGlossaryBrieflyProps {
  content: IGlossaryBriefly[];
}

// Glossary item
//* ------------------------------------------------------------------ *//
const GlossaryBriefly: FC<IGlossaryBrieflyProps> = (props) => {
  const { content } = props;

  // useNewStore()

  return (
    <>
      {content.map((b, index) => (
        <GlossaryContentItemStyled key={b.id}>
          <WordTitle pinyin={b.pinyin} translate={b.translate} index={index + 1}>
            {b.hieroglyph}
          </WordTitle>
        </GlossaryContentItemStyled>
      ))}
    </>
  );
};

export default GlossaryBriefly;
