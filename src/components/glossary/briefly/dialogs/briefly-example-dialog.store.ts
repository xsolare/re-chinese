import { BaseDialogStore } from '#/components/xsolare';
import { action, makeAutoObservable, makeObservable } from 'mobx';

export interface IBrieflyDialogStoreShowParams {
  examples: string[];
}

export interface IBrieflyDialogStoreController {
  show: (params: IBrieflyDialogStoreShowParams) => void;
  hide: () => void;
}

export class BrieflyDialogStore extends BaseDialogStore {
  showParams = {
    examples: []
  } as IBrieflyDialogStoreShowParams;

  controller = {
    show: (params) => {
      this.setExamples(params);
      this.showDialog();
    },
    hide: () => this.hideDialog()
  } as IBrieflyDialogStoreController;

  constructor() {
    super();

    makeAutoObservable(this.showParams);
    makeObservable(this, {
      setExamples: action
    });
  }

  setExamples = (params: IBrieflyDialogStoreShowParams) =>
    (this.showParams.examples = params.examples);
}
