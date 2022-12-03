import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { GlossaryTesterStore } from './glossary-tester.store';
import { useNewStore } from '#/components/xsolare/helpers';
import { GlossarySectionStyled } from '../section.style';

interface IGlossaryTesterProps {
  content: unknown[];
}

const GlossaryTester: FC<IGlossaryTesterProps> = ({ content }) => {
  useNewStore(GlossaryTesterStore);

  return <GlossarySectionStyled>NOT IMPLEMENTED</GlossarySectionStyled>;
};

export default observer(GlossaryTester);
