import React from 'react'
import s from './Skills.module.scss'
import { Skill } from './Skill/Skill'
import htmlLogo from '../../../assets/images/html.svg'
import cssLogo from '../../../assets/images/css.svg'
import jsLogo from '../../../assets/images/js.svg'
import tsLogo from '../../../assets/images/ts.svg'
import reactLogo from '../../../assets/images/react.svg'
import reduxLogo from '../../../assets/images/redux.svg'
import muiLogo from '../../../assets/images/mui.svg'
import styledComponentsLogo from '../../../assets/images/styled_c.png'

export const Skills = () => {
  return (
    <div className={s.skills}>
      <h3 className={s.title}>my skills</h3>
      <div className={s.skillsList}>
        <Skill title={'html'} iconUrl={htmlLogo} />
        <Skill title={'css/scss'} iconUrl={cssLogo} />
        <Skill title={'javascript'} iconUrl={jsLogo} />
        <Skill title={'typescript'} iconUrl={tsLogo} />
        <Skill title={'react'} iconUrl={reactLogo} />
        <Skill title={'redux-toolkit'} iconUrl={reduxLogo} />
        <Skill title={'material ui'} iconUrl={muiLogo} />
        <Skill title={'styled-components'} iconUrl={styledComponentsLogo} />
      </div>
    </div>
  )
}
