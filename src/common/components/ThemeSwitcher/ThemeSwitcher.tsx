import React, { FC, useEffect, useState } from 'react'
import s from './ThemeSwitcher.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { getThemeFromLocalStorage, setThemeToLocalStorage } from '../../../utils/themeLocalStorage'

type PropsType = {}

export const ThemeSwitcher: FC<PropsType> = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage() || 'light')

  useEffect(() => {
    document.body.className = ''
    document.body.classList.add('theme-' + theme)
    setThemeToLocalStorage(theme)
  }, [theme])

  return (
    <div className={s.themeSwitcher} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faLightbulb} />
      )}
    </div>
  )
}
