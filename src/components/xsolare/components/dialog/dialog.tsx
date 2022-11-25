import type { FC, PropsWithChildren } from 'react';
import type { BaseDialogStore } from './dialog.store';
import { observer } from 'mobx-react-lite';
import { DialogWrapperStyle } from './dialog.style';
import cn from 'classnames';

export interface IDialogProps extends PropsWithChildren {
  store: BaseDialogStore;
  className?: string;
}

export const Dialog: FC<IDialogProps> = observer((props) => {
  const { children, store, className } = props;
  const {
    isDialogHidden,
    isNotAnimate,
    state: { isLock, isVisible }
  } = store;

  return isDialogHidden ? null : (
    <DialogWrapperStyle isNotAnimate={isNotAnimate} isVisible={isVisible} isLock={isLock}>
      <div className={cn('dialog', className)}>{children}</div>
    </DialogWrapperStyle>
  );
});