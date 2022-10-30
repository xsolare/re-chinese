import type { ThemeVarious } from '#/contexts/theme';
import type { UserModel } from '#/store/user';

export interface IInitialData {
  theme: ThemeVarious;
  user: UserModel;
}
