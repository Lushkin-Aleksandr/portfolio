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
              'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
            }
          />
          <ExperienceItem
            date={'2021'}
            jobTitle={'Advanced JavaScript'}
            jobPlace={'Udemy'}
            description={
              'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
            }
          />
          <ExperienceItem
            date={'2020'}
            jobTitle={'Samuraj way'}
            jobPlace={'It-incubator'}
            description={
              'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
            }
          />
        </ul>
        <ul className={s.list}>
          <ExperienceItem
            date={'2021'}
            jobTitle={'Web development'}
            jobPlace={'html academy'}
            description={
              'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
            }
          />
          <ExperienceItem
            date={'2019 - 2022'}
            jobTitle={'It-support'}
            jobPlace={'LLC Esp'}
            description={
              'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
            }
          />
          <ExperienceItem
            date={'2015 - 2019'}
            jobTitle={'bachelor degree of information technologies'}
            jobPlace={'nngasu'}
            description={
              'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
            }
          />
        </ul>
      </div>
    </div>
  )
}
