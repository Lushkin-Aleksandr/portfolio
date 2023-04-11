import React from 'react'
import s from './Experience.module.scss'
import { ExperienceItem } from './ExperienceItem/ExperienceItem'

export const Experience = () => {
  return (
    <div className={s.experience}>
      <h3 className={s.title}>Experience & Education</h3>
      <div className={s.listHolder}>
        <ul className={s.list}>
          <ExperienceItem
            date={'2022 - Present'}
            jobTitle={'React developer'}
            jobPlace={'It-incubator'}
            description={
              'Building single-page applications using modern stack of technologies. (React, RTK, Redux-Saga, Material UI, SCSS, Storybook, Snapshot tests etc).'
            }
          />
          <ExperienceItem
            date={'2021'}
            jobTitle={'Advanced JavaScript'}
            jobPlace={'Udemy'}
            description={'Theory and practice of JS (ES6)'}
          />
          <ExperienceItem
            date={'2020'}
            jobTitle={'Samuraj way'}
            jobPlace={'It-incubator'}
            description={'Social network on React/Redux'}
          />
        </ul>
        <ul className={s.list}>
          <ExperienceItem
            date={'2021'}
            jobTitle={'Web development'}
            jobPlace={'html academy'}
            description={'Learning HTML/CSS/JS for building adaptive and responsive layout'}
          />
          <ExperienceItem
            date={'2019 - 2022'}
            jobTitle={'It-support'}
            jobPlace={'LLC Esp'}
            description={'Working with customers for, solving technical issues'}
          />
          <ExperienceItem
            date={'2015 - 2019'}
            jobTitle={'bachelor degree of information technologies'}
            jobPlace={'nngasu'}
            description={'Computer science learning, basic development'}
          />
        </ul>
      </div>
    </div>
  )
}
