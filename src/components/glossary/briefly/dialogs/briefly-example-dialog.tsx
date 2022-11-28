import type { FC } from 'react';
import type { TControllerRef } from '#/components/xsolare/helpers';
import type { IBrieflyDialogStoreController } from './briefly-example-dialog.store';
import { Dialog } from '#/components/xsolare';
import { setController, useNewStore } from '#/components/xsolare/helpers';
import { observer } from 'mobx-react-lite';
import { BrieflyDialogStore } from './briefly-example-dialog.store';
import { BrieflyExampleDialogStyled } from './briefly-example-dialog.style';

interface IBrieflyDialogProps {
  controllerRef: TControllerRef<IBrieflyDialogStoreController>;
}

const BrieflyDialog: FC<IBrieflyDialogProps> = (props) => {
  const { controllerRef } = props;

  const store = useNewStore(BrieflyDialogStore);
  const controller = setController(store, controllerRef);

  return (
    <Dialog store={store} className="briefly-dialog">
      <BrieflyExampleDialogStyled>none</BrieflyExampleDialogStyled>
    </Dialog>
  );
};

export default observer(BrieflyDialog);
