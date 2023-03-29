import React, { FC, MouseEvent } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import s from './Button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PropsType = {
  icon?: IconProp
  text: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<PropsType> = ({ icon, text, onClick }) => {
  const finalClass = icon ? `${s.btn} ${s.btnWithIcon}` : s.btn

  return (
    <button className={finalClass} onClick={onClick}>
      {text}
      {icon && (
        <span className={s.btnIconHolder}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
    </button>
  )
}
