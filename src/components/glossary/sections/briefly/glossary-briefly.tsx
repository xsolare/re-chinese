import React, { useRef } from 'react';
import type { FC } from 'react';
import type { IGlossaryBriefly } from '#/types/glossary';
import type { IBrieflyDialogStoreController } from './dialogs/briefly-example-dialog.store';
import { GlossaryContentItemStyled } from '#/styles/glossary/glossary.style';
import { WordTitle } from '#/components/xsolare';
import { BiShowAlt } from 'react-icons/bi';
import { GlossarySectionStyled } from '../section.style';
import BrieflyDialog from './dialogs/briefly-example-dialog';

interface IGlossaryBrieflyProps {
  content: IGlossaryBriefly[];
  isHidden?: boolean;
}

// Glossary briefly
//* ------------------------------------------------------------------ *//
const GlossaryBriefly: FC<IGlossaryBrieflyProps> = (props) => {
  const { content, isHidden } = props;

  const controllerBrieflyDialogRef = useRef<IBrieflyDialogStoreController>();

  if (isHidden) {
    return null;
  }

  return (
    <GlossarySectionStyled>
      {content ? (
        content.map(({ translate, pinyin, id, examples, hieroglyph }, index) => (
          <GlossaryContentItemStyled key={id}>
            <WordTitle pinyin={pinyin} translate={translate} index={index + 1}>
              {hieroglyph}
            </WordTitle>
            {!!examples?.length && (
              <BiShowAlt
                type="button"
                onClick={() =>
                  controllerBrieflyDialogRef.current?.show({
                    examples,
                    hieroglyph: { id, hieroglyph, pinyin, translate }
                  })
                }
              />
            )}
          </GlossaryContentItemStyled>
        ))
      ) : (
        <h2>Краткое содержание не найдено</h2>
      )}
      <BrieflyDialog controllerRef={controllerBrieflyDialogRef} />
    </GlossarySectionStyled>
  );
};

export default GlossaryBriefly;
