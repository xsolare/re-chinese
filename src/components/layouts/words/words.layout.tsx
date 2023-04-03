/* eslint-disable @typescript-eslint/no-misused-promises */
import type { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import React from 'react'

//* Styles

//* Components
import { TabsSlider } from '#/components/xsolare'
import { isWindowExists } from '#/utils/helpers'
import { WordsLayoutStyled } from './words.style'

// Words layout
//* ------------------------------------------------------------------------------------------ *//
const WordsLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  const getDefaultTab = React.useMemo(() => {
    if (!isWindowExists()) return 0

    const { pathname } = window.location

    if (pathname === '/words/') return 0
    if (pathname === '/words/hsk-1') return 1
  }, [])

  const MemoSlider = React.useMemo(
    () => (
      <TabsSlider
        options={[
          { value: '/', additional: '' },
          { value: 'HSK 1', additional: 'hsk-1' }
        ]}
        renderOption={({ value, additional }) => (
          <div onClick={() => router.push(`/words/${(additional as string) ?? ''}`)}>{value}</div>
        )}
        defaultTab={getDefaultTab}
        headerText="Слова китайского языка"
        width="1000px"
      />
    ),
    []
  )

  return (
    <WordsLayoutStyled>
      {MemoSlider}
      {children}
    </WordsLayoutStyled>
  )
}
export default WordsLayout
