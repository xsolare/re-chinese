import React, { useRef } from 'react';
import type { FC } from 'react';
import type { IGlossaryBriefly } from '#/types/glossary';
import type { IBrieflyDialogStoreController } from './dialogs/briefly-example-dialog.store';
import { GlossaryContentItemStyled } from '#/styles/glossary/glossary.style';
import { WordTitle } from '#/components/xsolare';
import { BiShowAlt } from 'react-icons/bi';
import { useNewStore } from '#/components/xsolare/helpers';
import { GlossaryBrieflyStore } from './glossary-briefly.store';
import BrieflyDialog from './dialogs/briefly-example-dialog';

interface IGlossaryBrieflyProps {
  content: IGlossaryBriefly[];
}

// Glossary item
//* ------------------------------------------------------------------ *//
const GlossaryBriefly: FC<IGlossaryBrieflyProps> = (props) => {
  const { content } = props;

  useNewStore(GlossaryBrieflyStore);
  const controllerBrieflyDialogRef = useRef<IBrieflyDialogStoreController>();

  return (
    <>
      {content.map(({ translate, pinyin, id, examples, hieroglyph }, index) => (
        <GlossaryContentItemStyled key={id}>
          <WordTitle pinyin={pinyin} translate={translate} index={index + 1}>
            {hieroglyph}
          </WordTitle>
          {!!examples?.length && (
            <BiShowAlt
              type="button"
              onClick={() => controllerBrieflyDialogRef.current?.show({ examples })}
            />
          )}
        </GlossaryContentItemStyled>
      ))}
      <BrieflyDialog controllerRef={controllerBrieflyDialogRef} />
    </>
  );
};

export default GlossaryBriefly;
