import type { ThemeVarious } from '#/contexts/theme'
import type { UserModel } from '#/store/common/user.store'

export interface IInitialData {
  theme: ThemeVarious
  user: UserModel
}
