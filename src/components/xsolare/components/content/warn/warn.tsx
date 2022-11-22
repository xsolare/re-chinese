import type { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { WarnStyled } from './warn.style';
import React from 'react';

interface IExampleProps extends PropsWithChildren {
  row?: string;
}

export const Warn: FC<IExampleProps> = observer((props) => {
  const { children, ...rest } = props;

  return <WarnStyled {...rest}>{children}</WarnStyled>;
});
