import React, { FC, PropsWithChildren } from 'react'
import { Portal } from '../Portal/Portal'
import s from './Modal.module.scss'

type PropsType = {
  open: boolean
  onClose: () => void
}

export const Modal: FC<PropsWithChildren<PropsType>> = ({ open, onClose, children }) => {
  if (!open) {
    return null
  }
  return (
    <Portal>
      <div className={s.modal}>
        <div className={s.overlay} onClick={onClose} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  )
}
