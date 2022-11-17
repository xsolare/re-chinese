import type { FC, PropsWithChildren } from 'react';
import type { ITooltipProps } from '#/components/xsolare';
import { observer } from 'mobx-react-lite';
import { WordStyled } from './word.style';
import React from 'react';
import { Tooltip } from '#/components/xsolare';

interface IWordProps extends PropsWithChildren {
  type?: number;
  p?: string;
  t?: string;
}

export const Word: FC<IWordProps> = observer((props) => {
  const { type = 1, children } = props;

  return (
    <WordStyled type={type}>
      <WordVarious {...{ ...props, type }}>{children}</WordVarious>
    </WordStyled>
  );
});

const WordVarious: FC<IWordProps> = observer((props) => {
  const { children, p: pinyin, t: translate, type } = props;

  const tooltipTop: ITooltipProps = { title: pinyin ?? '', delay: 100, placement: 'top' };
  const tooltipBottom: ITooltipProps = {
    title: translate ?? '',
    delay: 100,
    placement: 'bottom'
  };

  if (type === 1) {
    return (
      <>
        <Tooltip {...tooltipTop}>
          <span className="hieroglyph">{children}</span>
        </Tooltip>
        {translate ? <span className="translate"> - {translate}</span> : null}
      </>
    );
  }

  if (type === 2) {
    return (
      <>
        <Tooltip {...tooltipBottom}>
          <span className="hieroglyph">{children}</span>
        </Tooltip>
        {pinyin ? <span className="pinyin">({pinyin})</span> : null}
      </>
    );
  }

  if (type === 3) {
    return (
      <>
        {pinyin ? <span className="pinyin"> {pinyin}</span> : null}
        <span className="hieroglyph">{children}</span>
        {translate ? <span className="translate"> {translate}</span> : null}
      </>
    );
  }

  if (type === 4) {
    return (
      <>
        {pinyin ? <span className="pinyin"> {pinyin}</span> : null}
        <span className="hieroglyph">{children}</span>
        {translate ? <span className="translate"> {translate}</span> : null}
      </>
    );
  }

  if (type === 5) {
    return (
      <>
        {pinyin ? <span className="pinyin"> {pinyin}</span> : null}
        <span className="hieroglyph">{children}</span>
        {translate ? <span className="translate"> {translate}</span> : null}
      </>
    );
  }

  return null;
});
