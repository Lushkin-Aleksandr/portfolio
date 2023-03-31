import React, { FC, PropsWithChildren, useEffect } from 'react'
import { Portal } from '../Portal/Portal'
import s from './Modal.module.scss'

type PropsType = {
  open: boolean
  onClose: () => void
}

export const Modal: FC<PropsWithChildren<PropsType>> = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  if (!open) {
    return null
  }

  return (
    <Portal>
      <div className={s.modal}>
        <div className={s.overlay} onClick={onClose} tabIndex={0} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  )
}
