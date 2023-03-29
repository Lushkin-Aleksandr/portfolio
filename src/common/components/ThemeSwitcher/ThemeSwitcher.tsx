import React, { FC, useEffect, useState } from 'react'
import s from './ThemeSwitcher.module.scss'

type PropsType = {}

export const ThemeSwitcher: FC<PropsType> = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = ''
    document.body.classList.add('theme-' + theme)
  }, [theme])

  return (
    <div className={s.themeSwitcher} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <span>Light</span> : <span>Dark</span>}
    </div>
  )
}
