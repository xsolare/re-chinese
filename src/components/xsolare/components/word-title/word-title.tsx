import type { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { WordTitleStyledHTML } from './word-title.style';
import React from 'react';

interface IWordTitleProps extends PropsWithChildren {
  index: string;
  p: string;
  t: string;
}

export const WordTitle: FC<IWordTitleProps> = observer((props) => {
  const { children, index, p, t } = props;

  return (
    <WordTitleStyledHTML>
      <span>{index}</span>
      <h2>{children}</h2>
      <div>
        <span>{p}</span>
        <span>{t}</span>
      </div>
    </WordTitleStyledHTML>
  );
});
