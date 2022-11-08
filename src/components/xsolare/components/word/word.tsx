import type { FC, PropsWithChildren } from 'react';
import type { ITooltipProps } from '../tooltip/tooltip.store';
import { observer } from 'mobx-react-lite';
import { TranslateStyledHTML, WordStyledHTML } from './word.style';
import { Tooltip } from '../tooltip/tooltip';
import React from 'react';

interface IWordProps extends PropsWithChildren {
  p: string;
  t: string;
}

export const Word: FC<IWordProps> = observer((props) => {
  const { children, p, t } = props;

  const tooltip: ITooltipProps = { title: p ?? '', delay: 100, placement: 'top' };

  return (
    <WordStyledHTML>
      <Tooltip {...tooltip}>
        <span className="hieroglyph">{children}</span>
      </Tooltip>
      {t ? <TranslateStyledHTML> - {t}</TranslateStyledHTML> : null}
    </WordStyledHTML>
  );
});
