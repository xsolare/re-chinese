/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import type { FC } from 'react';
import React from 'react';

//* Components
import { MdNotificationsActive } from 'react-icons/md';
import { GiBowenKnot } from 'react-icons/gi';

//* Styles
import S from './header.module.scss';
import Link from 'next/link';
import type { ThemeVarious } from '#/contexts/theme';

//* icons
import { GiSun, GiNightSleep } from 'react-icons/gi';
import { IoMdRainy } from 'react-icons/io';
import { useStore } from '#/store';
import { observer } from 'mobx-react-lite';

const themeIcon = new Map<ThemeVarious, JSX.Element>([
  ['light', <GiSun key={1} />],
  ['dark', <GiNightSleep key={2} />],
  ['blue', <IoMdRainy key={3} />]
]);

// Header component
//* ------------------------------------------------------------------------------------------ *//
const Header: FC = observer(() => {
  const { appStore } = useStore();
  const { theme, setTheme } = appStore;

  const handleClickTheme = () => {
    const arr: ThemeVarious[] = ['blue', 'light', 'dark'];
    const i = arr.indexOf(theme);
    setTheme(arr[i === arr.length - 1 ? 0 : i + 1]);
  };

  return (
    <header className={S.header}>
      <nav className={S.headerNav}>
        <div className={S.headerNavFirst}>
          <ul className={S.headerUl}>
            <li className={S.headerLi}>
              <Link href="/">
                <GiBowenKnot />
              </Link>
            </li>
            <li className={S.headerLi}>
              <Link href="/glossary">glossary</Link>
            </li>
            <li className={S.headerLi}>
              <Link href="/pinyin">pinyin</Link>
            </li>
            <li className={S.headerLi}>
              <Link href="/hieroglyph">hieroglyph</Link>
            </li>
          </ul>
        </div>
        <div className={S.headerNavSecond}>
          <ul className={S.headerUl}>
            <li className={S.headerLi} onClick={handleClickTheme}>
              {themeIcon.get(theme)}
            </li>

            <li className={S.headerLi}>
              <MdNotificationsActive />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
});

export default Header;
