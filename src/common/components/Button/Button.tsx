import React, { ButtonHTMLAttributes, FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import s from './Button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons/faRotate'

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: IconProp
  loading?: boolean
  text: string
}

export const Button: FC<PropsType> = ({ icon, text, loading, ...props }) => {
  const finalClass = icon ? `${s.btn} ${s.btnWithIcon}` : s.btn

  return (
    <button className={finalClass} {...props} disabled={loading}>
      {text}
      {icon && (
        <span className={s.btnIconHolder}>
          <FontAwesomeIcon icon={loading ? faRotate : icon} spin={loading} />
        </span>
      )}
    </button>
  )
}
