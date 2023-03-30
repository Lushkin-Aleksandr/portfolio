import React from 'react'
import s from './AboutMe.module.scss'
import { PageTitle } from '../../common/components/PageTitle/PageTitle'
import { PersonalInfo } from './PersonalInfo/PersonalInfo'
import { Skills } from './Skills/Skills'
import { Experience } from './Experience/Experience'

export const AboutMe = () => {
  return (
    <div className={s.aboutMe}>
      <div className={s.container}>
        <PageTitle firstTextPart={'about'} secondTextPart={'me'} backgroundText={'resume'} />
        <div className={s.infoSkillsWrapper}>
          <PersonalInfo />
          <Skills />
        </div>
        <Experience />
      </div>
    </div>
  )
}
