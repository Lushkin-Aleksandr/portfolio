import React, { FC, TextareaHTMLAttributes } from 'react'
import s from './Textarea.module.scss'
import classNames from 'classnames'

type PropsType = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string | false
}

export const Textarea: FC<PropsType> = ({ className, error, ...props }) => {
  return (
    <div className={s.textareaHolder}>
      <textarea
        className={classNames(s.textarea, className, { [s.textareaWrong]: error })}
        {...props}
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}
