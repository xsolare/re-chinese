import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import type { ITooltipProps } from '#/components/xsolare';
import { observer } from 'mobx-react-lite';
import { WordStyled } from './word.style';
import { Tooltip } from '#/components/xsolare';
import { useStore } from '#/store';

interface IWordProps extends PropsWithChildren {
  p?: string;
  t?: string;
}

export const Word: FC<IWordProps> = observer((props) => {
  const { children } = props;

  const { wordStore } = useStore();
  const { type } = wordStore.state;

  return (
    <WordStyled type={type} key={type}>
      <WordVarious {...{ ...props, type }}>{children}</WordVarious>
    </WordStyled>
  );
});

const WordVarious: FC<IWordProps & { type: number }> = observer((props) => {
  const { children, p: pinyin, t: translate, type } = props;

  const tooltipTop: ITooltipProps = { title: pinyin ?? '', delay: 100, placement: 'top' };
  const tooltipBottom: ITooltipProps = {
    title: translate ?? '',
    delay: 100,
    placement: 'bottom'
  };

  switch (type) {
    case 1:
      return (
        <>
          <Tooltip {...tooltipTop}>
            <span className="hieroglyph">{children}</span>
          </Tooltip>
          {translate ? <span className="translate"> - {translate}</span> : null}
        </>
      );

    case 2:
      return (
        <>
          <Tooltip {...tooltipBottom}>
            <span className="hieroglyph">{children}</span>
          </Tooltip>
          {pinyin ? <span className="pinyin">({pinyin})</span> : null}
        </>
      );

    case 3:
      return (
        <>
          {pinyin ? <span className="pinyin"> {pinyin}</span> : null}
          <span className="hieroglyph">{children}</span>
          {translate ? <span className="translate"> - {translate}</span> : null}
        </>
      );

    case 4:
      return (
        <>
          {pinyin ? <span className="pinyin"> {pinyin}</span> : null}
          <span className="hieroglyph">{children}</span>
          {translate ? <span className="translate"> {translate}</span> : null}
        </>
      );
    case 5:
      return (
        <>
          {pinyin ? <span className="pinyin"> {pinyin}</span> : null}
          <span className="hieroglyph">{children}</span>
          {translate ? <span className="translate"> {translate}</span> : null}
        </>
      );

    default:
      return null;
  }
});
