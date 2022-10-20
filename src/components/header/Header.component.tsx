import type { FC } from 'react'
import React, { createRef, Fragment, useState } from 'react'

// Styles
import styles from './Header.module.scss'
const {
  header,
  headerNav,
  headerNavFirst,
  headerNavSecond,
  menuProfile,
  Active,
  menuProfileAvatar,
  menuProfileChevron,
  headerUl,
  headerLi,
  hrV
} = styles

//* Components
import ChevronIcon from '../../assets/icon/Chevron.svg'
import { FaUserFriends } from 'react-icons/fa'
import { MdNotificationsActive } from 'react-icons/md'
import { GiBowenKnot } from 'react-icons/gi'

//* Utils
import Link from 'next/link'
import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////
const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const menuButtonRef = createRef()

  const MenuChevron = React.forwardRef((_, ref: any) => (
    <div ref={ref} className={menuProfileChevron} onClick={handleClickMenu}>
      <ChevronIcon />
    </div>
  ))

  return (
    <Fragment>
      <header className={header}>
        <nav className={headerNav}>
          <div className={headerNavFirst}>
            <ul className={headerUl}>
              <li className={headerLi}>
                <GiBowenKnot />
              </li>
              <li className={headerLi}>
                <Link href={'/'}>
                  <a>Home</a>
                </Link>
              </li>
              <li className={headerLi}>
                <hr className={hrV} />
              </li>
              <li className={headerLi}>
                <Link href={'/leaderbord'}>
                  <a>Leaderbord</a>
                </Link>
              </li>
              <li className={headerLi}>
                <hr className={hrV} />
              </li>
              <li className={headerLi}>
                <Link href={'/game/lobbies'}>
                  <a>Game</a>
                </Link>
              </li>
              <li className={headerLi}>
                <hr className={hrV} />
              </li>
              <li className={headerLi}>
                <Link href={'/friends'}>
                  <a>Friends</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={headerNavSecond}>
            <ul className={headerUl}>
              <li className={headerLi}>
                <MdNotificationsActive />
              </li>
              <li className={headerLi}>
                <FaUserFriends />
              </li>

              <li className={headerLi}>
                <div
                  className={cn(menuProfile, {
                    [Active]: isMenuOpen
                  })}
                >
                  <Link href={'/'}>
                    <a>
                      <img
                        className={menuProfileAvatar}
                        src={process.env.AVATAR_NULL}
                        alt="Evai"
                        width="32"
                        height="32"
                      />
                    </a>
                  </Link>

                  <MenuChevron ref={menuButtonRef} />

                  {/* {isMenuOpen && <Menu menuButtonRef={menuButtonRef} setOpen={setIsMenuOpen} />} */}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}
