/* eslint-disable @typescript-eslint/no-empty-interface */
import type { ThemeTypes } from '#/utils/theme/emotion-theme'

declare module '@emotion/react' {
  export interface Theme extends ThemeTypes {}
}
