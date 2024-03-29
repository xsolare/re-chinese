import type { IGlossaryItem } from '#/types/glossary'
import type { FC } from 'react'
import Link from 'next/link'
import { AiTwotoneFire } from 'react-icons/ai'
import { Tooltip } from '#/components/xsolare'
import { GlossaryItemHskStyled, GlossaryItemStyled } from './glossary-item.style'

type IGlossaryItemProps = IGlossaryItem

// Glossary item
//* ------------------------------------------------------------------ *//
const GlossaryItem: FC<IGlossaryItemProps> = (props) => {
  const { url, title, hsk } = props

  return (
    <Link href={`/glossary/${url}`}>
      <GlossaryItemStyled>
        <div className="badges-header">
          <div> </div>
          <Tooltip title="Уровень сложности по шкале HSK (1-9)" placement="bottom" delay={250}>
            <GlossaryItemHskStyled hsk={hsk}>
              <AiTwotoneFire />
              <div>{hsk}</div>
            </GlossaryItemHskStyled>
          </Tooltip>
        </div>
        <div className="title">{title}</div>
      </GlossaryItemStyled>
    </Link>
  )
}

export default GlossaryItem
