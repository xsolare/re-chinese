import { action, makeObservable, observable } from 'mobx';

interface IGlossaryStoreState {
  isBriefly: boolean;
}

export default class GlossaryStore {
  state = {
    isBriefly: false
  } as IGlossaryStoreState;

  constructor() {
    makeObservable(this, {
      // ~ action
      setBriefly: action
    });

    makeObservable(this.state, {
      // ~ observable
      isBriefly: observable
    });
  }

  setBriefly = (status: boolean): boolean => (this.state.isBriefly = status);
}
