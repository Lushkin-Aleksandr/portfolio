import React, { FC } from 'react'
import s from './PageTitle.module.scss'

type PropsType = {
  firstTextPart: string
  secondTextPart: string
  backgroundText: string
}

export const PageTitle: FC<PropsType> = ({ firstTextPart, secondTextPart, backgroundText }) => {
  return (
    <h1 className={s.pageTitle}>
      <div className={s.mainText}>
        <span className={s.firstPart}>{firstTextPart}</span>
        <span className={s.secondPart}> {secondTextPart}</span>
      </div>
      <span className={s.backgroundText}>{backgroundText}</span>
    </h1>
  )
}
