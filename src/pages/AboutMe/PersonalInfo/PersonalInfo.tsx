import React from 'react'
import s from './PersonalInfo.module.scss'
import { InfoListItem } from './InfoListItem/InfoListItem'
import { Button } from '../../../common/components/Button/Button'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'

export const PersonalInfo = () => {
  return (
    <div className={s.personalInfo}>
      <h3 className={s.title}>personal info</h3>
      <ul className={s.list}>
        <InfoListItem title={'first name'} value={'Aleksandr'} />
        <InfoListItem title={'last name'} value={'Lushkin'} />
        <InfoListItem title={'age'} value={'25 years'} />
        <InfoListItem title={'Address'} value={'Germany'} />
        <InfoListItem title={'Email'} value={'lushkin.work@gmail.com'} />
        <InfoListItem title={'Languages'} value={'Russian, English(pre-intermediate)'} />
      </ul>
      <div className={s.btnWrapper}>
        <Button text={'download cv'} onClick={() => {}} icon={faDownload} />
      </div>
    </div>
  )
}