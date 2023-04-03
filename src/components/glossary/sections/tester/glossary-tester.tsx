import type { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { GlossarySectionStyled } from '#/components/glossary/sections/section.style'
import { useNewStore } from '#/components/xsolare/helpers'
import { GlossaryTesterStore } from './glossary-tester.store'

interface IGlossaryTesterProps {
  content: unknown[]
}

const GlossaryTester: FC<IGlossaryTesterProps> = ({ content }) => {
  useNewStore(GlossaryTesterStore)

  return <GlossarySectionStyled>NOT IMPLEMENTED {content.length}</GlossarySectionStyled>
}

export default observer(GlossaryTester)
