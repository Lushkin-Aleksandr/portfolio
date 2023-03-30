import React, { FC } from 'react'
import s from './ExperienceItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase'

type PropsType = {
  date: string
  jobTitle: string
  jobPlace: string
  description: string
}

export const ExperienceItem: FC<PropsType> = ({ date, jobTitle, jobPlace, description }) => {
  return (
    <li className={s.experienceItem}>
      <div className={s.iconHolder}>
        <FontAwesomeIcon icon={faBriefcase} />
      </div>
      <span className={s.date}>{date}</span>
      <h5 className={s.job}>
        <span className={s.jobTitle}>{jobTitle}</span>
        <span className={s.jobPlace}>{jobPlace}</span>
      </h5>
      <p className={s.description}>{description}</p>
    </li>
  )
}
