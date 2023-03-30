import React, { FC } from 'react'
import s from './Skill.module.scss'

type PropsType = {
  title: string
  iconUrl?: string
}

export const Skill: FC<PropsType> = ({ title, iconUrl }) => {
  return (
    <div className={s.skill}>
      <div className={s.circle}>
        <img className={s.logo} src={iconUrl} alt="skill logo" />
      </div>
      <span className={s.title}>{title}</span>
    </div>
  )
}
