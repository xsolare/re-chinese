import type { IControlStoreParams } from '#/components/xsolare/components/control.store';
import { ControlStore } from '#/components/xsolare/components/control.store';

export interface ICheckboxStoreParams extends IControlStoreParams<boolean> {
  className?: string;
  label?: string;
  labelActive?: string;
  onClick?: (e: MouseEvent) => void;
  isLabelOnLeftSide?: boolean;
}

export class CheckboxStore extends ControlStore<boolean> {
  constructor(params: ICheckboxStoreParams) {
    super(params);

    this.setValue(params.defaultValue || false);
    params.isLabelOnLeftSide = params.isLabelOnLeftSide || false;
  }

  show = (): void => this.setIsVisible(true);
  hide = (): void => this.setIsVisible(false);
}
