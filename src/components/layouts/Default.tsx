import React from 'react'
import type { FC, ReactNode } from 'react'

type ILayoutDefaultProps = {
  children: ReactNode
}

const LayoutDefault: FC<ILayoutDefaultProps> = ({ children }) => {
  return (
    <>
      <main className="layout-default">{children}</main>
    </>
  )
}

export default LayoutDefault
