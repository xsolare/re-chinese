import type { FC } from 'react'
import React, { useMemo } from 'react'
import { GlossarySectionStyled } from '#/components/glossary/sections/section.style'
import { parseGlossary } from '#/utils/parseTextToHtml'

interface IGlossaryTextProps {
  content: string
}

const GlossaryText: FC<IGlossaryTextProps> = ({ content }) => {
  const GlossaryContent = useMemo(() => parseGlossary(content), [])

  return (
    <GlossarySectionStyled>
      {content ? GlossaryContent : <h2>Текст не найден</h2>}
    </GlossarySectionStyled>
  )
}

export default GlossaryText
