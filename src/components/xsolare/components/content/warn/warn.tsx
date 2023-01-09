import type { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { WarnStyled } from './warn.style';

interface IExampleProps extends PropsWithChildren {
  row?: string;
}

export const Warn: FC<IExampleProps> = observer((props) => {
  const { children, ...rest } = props;

  return <WarnStyled {...rest}>{children}</WarnStyled>;
});
