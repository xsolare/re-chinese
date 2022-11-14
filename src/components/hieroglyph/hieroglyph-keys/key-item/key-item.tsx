import type { IHieroglyph } from '#/types/hieroglyph';
import type { FC } from 'react';
import { HieroglyphKeysItem, HieroglyphKeysWrapper } from './key-item.style';
import React from 'react';
import { KeyItemStore } from './key-item.store';
import { observer } from 'mobx-react-lite';
import { useNewStore } from '#/components/xsolare/helpers';

//* Components

//* Styles

interface IHieroglyphKeyProps {
  hieroglyph: IHieroglyph;
  isPinyin: boolean;
  isTranslate: boolean;
}

// HieroglyphKey component
//* ------------------------------------------------------------------------------------------ *//
const HieroglyphKey: FC<IHieroglyphKeyProps> = (props) => {
  const { hieroglyph: h, isPinyin, isTranslate } = props;

  const store = useNewStore(KeyItemStore);
  const { setIsActive, state } = store;

  return (
    <HieroglyphKeysWrapper>
      <HieroglyphKeysItem
        onClick={() => setIsActive(!state.isActive)}
        isPinyin={isPinyin || state.isActive}
        isTranslate={isTranslate || state.isActive}>
        <div className="index">{h.id}</div>
        <div className="pinyin">{h.pinyin}</div>
        <div className="hieroglyph">{h.hieroglyph}</div>
        <div className="translate">{h.translate}</div>
      </HieroglyphKeysItem>
    </HieroglyphKeysWrapper>
  );
};

export default observer(HieroglyphKey);
