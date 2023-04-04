/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import type { ThemeVarious } from '#/contexts/theme'
import type { FC } from 'react'
import { observer } from 'mobx-react-lite'

//* Components
import Link from 'next/link'
import React from 'react'

//* icons
import { GiSun, GiNightSleep } from 'react-icons/gi'
import { IoMdRainy } from 'react-icons/io'
import { SiDungeonsanddragons } from 'react-icons/si'
import { VscUngroupByRefType } from 'react-icons/vsc'
import { HeaderStyled } from '#/components/header/header.style'
import { useStore } from '#/store'

const themeIcon = new Map<ThemeVarious, JSX.Element>([
  ['light', <GiSun key={1} />],
  ['dark', <GiNightSleep key={2} />],
  ['blue', <IoMdRainy key={3} />]
])

// Header component
//* ------------------------------------------------------------------------------------------ *//
const Header: FC = observer(() => {
  const { appStore, wordStore } = useStore()
  const {
    state: { theme },
    setTheme,
    headerOpacity
  } = appStore

  const {
    state: { type },
    setType
  } = wordStore

  const handleClickTheme = () => {
    const arr: ThemeVarious[] = ['blue', 'light', 'dark']
    const i = arr.indexOf(theme)
    setTheme(arr[i === arr.length - 1 ? 0 : i + 1])
  }

  const handleClickWordType = () => {
    setType(type === 5 ? 1 : type + 1)
  }

  return (
    <HeaderStyled opacity={headerOpacity}>
      <nav>
        <div>
          <ul>
            <li>
              <Link href="/">
                <SiDungeonsanddragons />
              </Link>
            </li>
            <li>
              <Link href="/glossary">Глоссарий</Link>
            </li>
            <li>
              <Link href="/hieroglyph">Иероглифы</Link>
            </li>
            <li>
              <Link href="/words">Слова</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li onClick={handleClickWordType}>
              <span>{type}</span> <VscUngroupByRefType />
            </li>
            <li onClick={handleClickTheme}>{themeIcon.get(theme)}</li>
          </ul>
        </div>
      </nav>
      {/* <Menu /> */}
    </HeaderStyled>
  )
})

export default Header
