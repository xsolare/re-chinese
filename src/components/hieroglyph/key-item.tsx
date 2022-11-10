import type { IHieroglyph } from '#/types/hieroglyph';
import type { FC } from 'react';
import { HieroglyphKeysItem, HieroglyphKeysWrapper } from './key-item.style';
import React from 'react';

//* Components

//* Styles

interface IHieroglyphKeyProps {
  hieroglyph: IHieroglyph;
  isFullyShowed?: boolean;
}

// HieroglyphKey component
//* ------------------------------------------------------------------------------------------ *//
const HieroglyphKey: FC<IHieroglyphKeyProps> = (props) => {
  const { hieroglyph: h, isFullyShowed = false } = props;
  const { id, hieroglyph, pinyin, translate } = h;

  const handleOnClickShow = () => {
    console.log('handleOnClickShow', isFullyShowed);
  };

  return (
    <HieroglyphKeysWrapper>
      <HieroglyphKeysItem onClick={handleOnClickShow}>
        {/* <TransitionGroup name="item-transition"> */}
        <div className="index">{id}</div>
        <div className="pinyin isFullyShowed">{pinyin}</div>
        <div className="hieroglyph">{hieroglyph}</div>
        <div className="translate isFullyShowed">{translate}</div>
        {/* </TransitionGroup> */}
      </HieroglyphKeysItem>
    </HieroglyphKeysWrapper>
  );
};

export default HieroglyphKey;
