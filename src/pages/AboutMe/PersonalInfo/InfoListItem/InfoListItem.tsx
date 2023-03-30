import React, { FC } from 'react'
import s from './InfoListItem.module.scss'

type PropsType = {
  title: string
  value: string
}

export const InfoListItem: FC<PropsType> = ({ title, value }) => {
  return (
    <li className={s.listItem}>
      <span className={s.itemTitle}>{title}</span>:&nbsp;
      <span className={s.itemValue}>{value}</span>
    </li>
  )
}
