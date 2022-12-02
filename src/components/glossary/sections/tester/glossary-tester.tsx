import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { GlossaryTesterStore } from './glossary-tester.store';
import { useNewStore } from '#/components/xsolare/helpers';
import { GlossaryPageStyled } from '../sections/section.style';

interface IGlossaryTesterProps {
  isHidden?: boolean;
}

const GlossaryTester: FC<IGlossaryTesterProps> = (props) => {
  const { isHidden } = props;

  useNewStore(GlossaryTesterStore);

  if (isHidden) {
    return null;
  }

  return <GlossaryPageStyled>NOT IMPLEMENTED</GlossaryPageStyled>;
};

export default observer(GlossaryTester);
