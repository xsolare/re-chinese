import type { FC } from 'react';
import React from 'react';

//* Components
import { MdNotificationsActive } from 'react-icons/md';
import { GiBowenKnot } from 'react-icons/gi';

//* Styles
import S from './header.module.scss';
import Link from 'next/link';

// Header component
//* ------------------------------------------------------------------------------------------ *//
const Header: FC = () => {
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
          </ul>
        </div>
        <div className={S.headerNavSecond}>
          <ul className={S.headerUl}>
            <li className={S.headerLi}>
              <MdNotificationsActive />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
