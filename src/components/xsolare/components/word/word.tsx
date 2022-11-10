import type { FC, PropsWithChildren } from 'react';
import type { ITooltipProps } from '../tooltip/tooltip.store';
import { observer } from 'mobx-react-lite';
import { TranslateStyled, WordStyled, PinyinStyled, HieroglyphStyled } from './word.style';
import { Tooltip } from '../tooltip/tooltip';
import React from 'react';

interface IWordProps extends PropsWithChildren {
  type?: number;
  p?: string;
  t?: string;
}

export const Word: FC<IWordProps> = observer((props) => {
  const { children, p: pinyin, t: translate, type = 1 } = props;

  const tooltipTop: ITooltipProps = { title: pinyin ?? '', delay: 100, placement: 'top' };
  const tooltipBottom: ITooltipProps = { title: translate ?? '', delay: 100, placement: 'bottom' };

  if (type === 1) {
    return (
      <WordStyled type={type}>
        <Tooltip {...tooltipTop}>
          <HieroglyphStyled>{children}</HieroglyphStyled>
        </Tooltip>
        {translate ? <TranslateStyled> - {translate}</TranslateStyled> : null}
      </WordStyled>
    );
  }

  if (type === 2) {
    <WordStyled type={type}>
      {pinyin ? <PinyinStyled> {pinyin}</PinyinStyled> : null}
      <HieroglyphStyled>{children}</HieroglyphStyled>
      {translate ? <TranslateStyled> {translate}</TranslateStyled> : null}
    </WordStyled>;
  }

  if (type === 3) {
    <WordStyled type={type}>
      <Tooltip {...tooltipTop}>
        <Tooltip {...tooltipBottom}>
          <HieroglyphStyled>{children}</HieroglyphStyled>
        </Tooltip>
      </Tooltip>
    </WordStyled>;
  }

  return null;
});
