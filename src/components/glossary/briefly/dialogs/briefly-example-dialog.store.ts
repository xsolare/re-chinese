import { BaseDialogStore } from '#/components/xsolare';

export interface IBrieflyDialogStoreShowParams {
  exmples: unknown[];
}

export interface IBrieflyDialogStoreController {
  show: (params: IBrieflyDialogStoreShowParams) => void;
  hide: () => void;
}

export class BrieflyDialogStore extends BaseDialogStore {
  showParams = {} as IBrieflyDialogStoreShowParams;

  controller = {
    show: (params) => {
      this.showParams = params;
      this.showDialog();
    },
    hide: () => this.hideDialog()
  } as IBrieflyDialogStoreController;
}
