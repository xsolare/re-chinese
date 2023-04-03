import type { Sections } from '#/store/pages/glossary.store'
import type { IGlossaryBase } from '#/types/glossary'
import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext, useEffect } from 'react'
import { useNewStore } from '#/components/xsolare/helpers'
import GlossaryStore from '#/store/pages/glossary.store'

interface IGlossaryUrlContext {
  pageStore: GlossaryStore
  setupGlossaryBase: (glossary: IGlossaryBase, url: Sections) => void
}

const GlossaryUrlContext = createContext<IGlossaryUrlContext>({} as IGlossaryUrlContext)

export const useGlossaryUrlContext = (): IGlossaryUrlContext => useContext(GlossaryUrlContext)

export const GlossaryUrlProvider: FC<PropsWithChildren> = ({ children }) => {
  const pageStore = useNewStore(GlossaryStore)
  const { setOnceGlossaryBase } = pageStore

  const setupGlossaryBase = (glossary: IGlossaryBase, url: Sections) => {
    useEffect(() => {
      setOnceGlossaryBase(glossary, url)
    }, [])
  }

  return (
    <GlossaryUrlContext.Provider value={{ pageStore, setupGlossaryBase }}>
      {children}
    </GlossaryUrlContext.Provider>
  )
}
