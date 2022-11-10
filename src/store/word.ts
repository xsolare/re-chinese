import { makeAutoObservable } from 'mobx';

export interface 

export interface WordStoreState {
  type: number;
}

export default class WordStore {
  state = {
    type: 1
  } as WordStoreState;

  constructor() {
    makeAutoObservable(this.state);
  }
}
