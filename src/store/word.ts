import { action, makeObservable, observable } from 'mobx';

export const WordType = [0, 1, 2, 3, 4, 5] as const;
export type IWordType = keyof typeof WordType;

export interface WordStoreState {
  type: number;
}

export default class WordStore {
  state = {
    type: 1
  } as WordStoreState;

  constructor() {
    makeObservable(this.state, {
      type: observable
    });

    makeObservable(this, {
      setType: action
    });
  }

  setType = (type: number): number => (this.state.type = type);
}
