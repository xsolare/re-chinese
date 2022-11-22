import { action, computed, makeObservable, observable } from 'mobx';

interface IGlossaryStoreState {
  isBriefly: boolean;
  isTester: boolean;
}

export default class GlossaryStore {
  state = {
    isBriefly: false,
    isTester: false
  } as IGlossaryStoreState;

  constructor() {
    makeObservable(this, {
      // ~ action
      setBriefly: action,
      setTester: action,
      isBrieflyPage: computed,
      isTestPage: computed,
      isGlossaryPage: computed
    });

    makeObservable(this.state, {
      // ~ observable
      isBriefly: observable,
      isTester: observable
    });
  }

  setBriefly = (status: boolean) => {
    this.state.isBriefly = status;
    this.state.isTester = false;
  };

  setTester = (status: boolean) => {
    this.state.isBriefly = false;
    this.state.isTester = status;
  };

  get isBrieflyPage(): boolean {
    return this.state.isBriefly;
  }

  get isTestPage(): boolean {
    return this.state.isTester;
  }

  get isGlossaryPage(): boolean {
    const { isBriefly, isTester } = this.state;

    return !isBriefly && !isTester;
  }
}
