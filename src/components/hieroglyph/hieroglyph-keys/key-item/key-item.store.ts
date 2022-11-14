import { makeObservable, action, observable } from 'mobx';

export class KeyItemStore {
  state = {
    isActive: false
  };

  constructor() {
    makeObservable(this.state, {
      isActive: observable
    });

    makeObservable(this, {
      setIsActive: action
    });
  }

  setIsActive = (status: boolean): boolean => (this.state.isActive = status);
}
