import type { FC, PropsWithChildren } from 'react'

//* Styles
import { DefaultStyled } from '../../styles/components/layouts/Default.style'

// Default layout
//* ------------------------------------------------------------------------------------------ *//
const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return <DefaultStyled>{children}</DefaultStyled>
}
export default DefaultLayout
