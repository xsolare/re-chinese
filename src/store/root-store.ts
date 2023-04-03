import AppStore from './app'
import UserStore from './user'
import WordStore from './word'

export interface RootStore {
  wordStore: WordStore
  appStore: AppStore
  userStore: UserStore
}
export class RootStore {
  constructor() {
    this.appStore = new AppStore()
    this.userStore = new UserStore()
    this.wordStore = new WordStore()
  }
}
