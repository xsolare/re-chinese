import type { IGlossaryBrieflyExample } from '#/types/glossary';
import type { IHieroglyph } from '#/types/hieroglyph';
import { action, makeAutoObservable, makeObservable } from 'mobx';
import { BaseDialogStore } from '#/components/xsolare';

export interface IBrieflyDialogStoreShowParams {
  hieroglyph: IHieroglyph;
  examples: IGlossaryBrieflyExample[];
}

export interface IBrieflyDialogStoreController {
  show: (params: IBrieflyDialogStoreShowParams) => void;
  hide: () => void;
}

export class BrieflyDialogStore extends BaseDialogStore {
  showParams = {
    hieroglyph: {} as IHieroglyph,
    examples: []
  } as IBrieflyDialogStoreShowParams;

  controller = {
    show: (params) => {
      this.setParams(params);
      this.showDialog();
    },
    hide: () => this.hideDialog()
  } as IBrieflyDialogStoreController;

  constructor() {
    super();

    makeAutoObservable(this.showParams);
    makeObservable(this, {
      setParams: action
    });
  }

  setParams = (params: IBrieflyDialogStoreShowParams) => {
    this.showParams.examples = params.examples;
    this.showParams.hieroglyph = params.hieroglyph;
  };
}
