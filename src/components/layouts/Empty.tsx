import React from 'react'
import type { FC, ReactNode } from 'react'

type ILayoutEmptyProps = {
  children: ReactNode
}

const LayoutEmpty: FC<ILayoutEmptyProps> = ({ children }) => {
  return (
    <>
      <main className="layout-empty">{children}</main>
    </>
  )
}

export default LayoutEmpty
