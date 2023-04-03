import type { ITooltipProps } from '#/components/xsolare'
import type { IWordType } from '#/store/word'
import type { FC, PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Tooltip } from '#/components/xsolare'
import { useStore } from '#/store'
import { WordStyled } from './word.style'

interface IWordProps extends PropsWithChildren {
  fixed?: IWordType
  pinyin?: string
  translate?: string
  styleInvert?: boolean
}

export const Word: FC<IWordProps> = observer((props) => {
  const { children, fixed, styleInvert = false } = props

  const { wordStore } = useStore()
  const { type } = wordStore.state

  const resultType = fixed ?? type ?? 1

  return (
    <WordStyled type={resultType} key={resultType as number} styleInvert={styleInvert}>
      <WordVarious {...{ ...props, type: resultType }}>{children}</WordVarious>
    </WordStyled>
  )
})

const WordVarious: FC<IWordProps & { type: IWordType }> = observer((props) => {
  const { children, pinyin, translate, type } = props

  const tooltipTop: ITooltipProps = { title: pinyin ?? '', delay: 100, placement: 'top' }
  const tooltipBottom: ITooltipProps = {
    title: translate ?? '',
    delay: 100,
    placement: 'bottom'
  }

  switch (type) {
    case 0:
      return (
        <Tooltip {...tooltipBottom}>
          <Tooltip {...tooltipTop}>
            <span className="hieroglyph">{children}</span>
          </Tooltip>
        </Tooltip>
      )

    case 1:
      return (
        <>
          <Tooltip {...tooltipTop}>
            <span className="hieroglyph">{children}</span>
          </Tooltip>
          {translate ? <span className="translate"> - {translate}</span> : null}
        </>
      )

    case 2:
      return (
        <>
          <Tooltip {...tooltipBottom}>
            <span className="hieroglyph">{children}</span>
          </Tooltip>
          {pinyin ? <span className="pinyin">({pinyin})</span> : null}
        </>
      )

    case 3:
      return (
        <>
          {pinyin ? <span className="pinyin"> {pinyin}</span> : null}
          <span className="hieroglyph">{children}</span>
          {translate ? <span className="translate"> - {translate}</span> : null}
        </>
      )

    case 4:
      return (
        <>
          {pinyin ? <span className="pinyin"> {pinyin}</span> : null}
          <span className="hieroglyph">{children}</span>
          {translate ? <span className="translate"> {translate}</span> : null}
        </>
      )
    case 5:
      return (
        <>
          {pinyin ? <span className="pinyin"> {pinyin}</span> : null}
          <span className="hieroglyph">{children}</span>
          {translate ? <span className="translate"> {translate}</span> : null}
        </>
      )

    default:
      return null
  }
})
