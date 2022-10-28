import AppStore from './app';
import UserStore from './user';

export interface RootStore {
  appStore: AppStore;
  userStore: UserStore;
}
export class RootStore {
  constructor() {
    this.appStore = new AppStore();
    this.userStore = new UserStore();
  }
}
