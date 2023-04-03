import React, { FC, InputHTMLAttributes } from 'react'
import s from './Input.module.scss'
import classNames from 'classnames'

type PropsType = InputHTMLAttributes<HTMLInputElement> & {
  error?: string | false
}

export const Input: FC<PropsType> = ({ className, error, ...props }) => {
  return (
    <div className={s.inputHolder}>
      <input className={classNames(s.input, className, { [s.inputWrong]: error })} {...props} />
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}
