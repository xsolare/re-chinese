import type { FC } from 'react';
import type { TControllerRef } from '#/components/xsolare/helpers';
import type { IBrieflyDialogStoreController } from './briefly-example-dialog.store';
import { Dialog, Word } from '#/components/xsolare';
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
  setController(store, controllerRef);
  const { examples, hieroglyph } = store.showParams;

  return (
    <Dialog store={store}>
      <BrieflyExampleDialogStyled>
        <h2>
          Примеры предложений с{' '}
          <Word {...hieroglyph} styleInvert fixed={0}>
            {hieroglyph.hieroglyph}
          </Word>
        </h2>
        {examples.map((example) => (
          <Word key={example.hieroglyph} {...example} styleInvert>
            {example.hieroglyph}
          </Word>
        ))}
      </BrieflyExampleDialogStyled>
    </Dialog>
  );
};

export default observer(BrieflyDialog);
