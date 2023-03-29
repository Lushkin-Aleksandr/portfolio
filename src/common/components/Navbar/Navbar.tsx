import React, { FC } from 'react'
import s from './Navbar.module.scss'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { NavButton } from './NavButton/NavButton'
import { ROUTE_PATHS } from '../../../constants/routePaths'

type PropsType = {}

export const Navbar: FC<PropsType> = () => {
  return (
    <div className={s.nav}>
      <NavButton icon={faHouse} text={'home'} path={ROUTE_PATHS.HOME} />
      <NavButton icon={faUser} text={'about'} path={ROUTE_PATHS.ABOUT} />
      <NavButton icon={faBriefcase} text={'portfolio'} path={ROUTE_PATHS.PORTFOLIO} />
      <NavButton icon={faEnvelope} text={'contact'} path={ROUTE_PATHS.CONTACT} />
    </div>
  )
}
