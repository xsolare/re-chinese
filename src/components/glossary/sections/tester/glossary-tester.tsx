import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { GlossaryTesterStore } from './glossary-tester.store';
import { useNewStore } from '#/components/xsolare/helpers';
import { GlossarySectionStyled } from '../section.style';

interface IGlossaryTesterProps {
  isHidden?: boolean;
}

const GlossaryTester: FC<IGlossaryTesterProps> = (props) => {
  const { isHidden } = props;

  useNewStore(GlossaryTesterStore);

  if (isHidden) {
    return null;
  }

  return <GlossarySectionStyled>NOT IMPLEMENTED</GlossarySectionStyled>;
};

export default observer(GlossaryTester);
