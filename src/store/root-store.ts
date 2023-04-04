import AppStore from './common/app.store'
import UserStore from './common/user.store'
import WordStore from './common/word.store'

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
