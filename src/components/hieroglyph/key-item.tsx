import {
  HieroglyphKeysItem,
  HieroglyphKeysWrapper
} from '#/styles/components/hieroglyph/key-item.style';
import type { IHieroglyph } from '#/types/hieroglyph';
import type { FC } from 'react';
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
        <div className="pinyin isFullyShowed">{hieroglyph}</div>
        <div className="hieroglyph">{pinyin}</div>
        <div className="translate isFullyShowed">{translate}</div>
        {/* </TransitionGroup> */}
      </HieroglyphKeysItem>
    </HieroglyphKeysWrapper>
  );
};

export default HieroglyphKey;
