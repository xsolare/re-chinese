import type { FC, PropsWithChildren } from 'react'
import React from 'react'

// Empty layout
//* ------------------------------------------------------------------------------------------ *//
const EmptyLayout: FC<PropsWithChildren> = ({ children }) => {
  return <main className="layout-empty">{children}</main>
}

export default EmptyLayout
