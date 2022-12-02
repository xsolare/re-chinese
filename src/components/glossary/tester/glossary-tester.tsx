import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { GlossaryTesterStore } from './glossary-tester.store';
import { useNewStore } from '#/components/xsolare/helpers';

// interface IGlossaryTesterProps {
//   controllerRef: TControllerRef<IBrieflyDialogStoreController>;
// }

const GlossaryTester: FC = () => {
  useNewStore(GlossaryTesterStore);

  return <div>1</div>;
};

export default observer(GlossaryTester);
