import type { FC, PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { ExampleStyled } from './example.style';
import React from 'react';

interface IExampleProps extends PropsWithChildren {
  row?: string;
}

export const Example: FC<IExampleProps> = observer((props) => {
  const { children, ...rest } = props;

  return <ExampleStyled {...rest}>{children}</ExampleStyled>;
});
