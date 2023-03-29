import React, { FC } from 'react'
import s from './NavButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { NavLink } from 'react-router-dom'

type PropsType = {
  text?: string
  icon: IconProp
  path: string
}

export const NavButton: FC<PropsType> = ({ text, icon, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? `${s.navBtn} ${s.active}` : s.navBtn)}
    >
      <FontAwesomeIcon icon={icon} />
      {text && <span className={s.navBtnText}>{text}</span>}
    </NavLink>
  )
}
