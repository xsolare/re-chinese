import React, { useRef } from 'react';
import type { FC } from 'react';
import type { IGlossaryBriefly } from '#/types/glossary';
import type { IBrieflyDialogStoreController } from './dialogs/briefly-example-dialog.store';
import { GlossaryContentItemStyled } from '#/styles/glossary/glossary.style';
import { WordTitle } from '#/components/xsolare';
import BrieflyDialog from './dialogs/briefly-example-dialog';
import { useNewStore } from '#/components/xsolare/helpers';
import { GlossaryBrieflyStore } from './glossary-briefly.store';

interface IGlossaryBrieflyProps {
  content: IGlossaryBriefly[];
}

// Glossary item
//* ------------------------------------------------------------------ *//
const GlossaryBriefly: FC<IGlossaryBrieflyProps> = (props) => {
  const { content } = props;

  const store = useNewStore(GlossaryBrieflyStore);
  const controllerBrieflyDialogRef = useRef<IBrieflyDialogStoreController>();

  return (
    <>
      <button
        type="button"
        onClick={() => controllerBrieflyDialogRef.current?.show({ examples: [] })}>
        ggg
      </button>
      {/* {content.map((b, index) => (
        <GlossaryContentItemStyled key={b.id}>
          <WordTitle pinyin={b.pinyin} translate={b.translate} index={index + 1}>
            {b.hieroglyph}
          </WordTitle>
        </GlossaryContentItemStyled>
      ))} */}
      <BrieflyDialog controllerRef={controllerBrieflyDialogRef} />
    </>
  );
};

export default GlossaryBriefly;
