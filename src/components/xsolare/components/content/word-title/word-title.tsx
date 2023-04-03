import type { FC, PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { WordTitleStyled } from './word-title.style'

interface IWordTitleProps extends PropsWithChildren {
  index: string | number
  pinyin: string
  translate: string
}

export const WordTitle: FC<IWordTitleProps> = observer((props) => {
  const { children, index, pinyin, translate } = props

  return (
    <WordTitleStyled>
      <span>{index}</span>
      <h2>{children}</h2>
      <div>
        <span>{pinyin}</span>
        <span>{translate}</span>
      </div>
    </WordTitleStyled>
  )
})
