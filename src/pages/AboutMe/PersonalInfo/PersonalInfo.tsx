import React, { useEffect, useRef } from 'react'
import s from './PersonalInfo.module.scss'
import { InfoListItem } from './InfoListItem/InfoListItem'
import { Button } from '../../../common/components/Button/Button'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import cvPdf from '../../../assets/files/Lushkin_CV.pdf'

export const PersonalInfo = () => {
  const fileLinkRef = useRef<HTMLAnchorElement | null>(null)

  const downloadCV = () => {
    fileLinkRef.current?.click()
  }

  useEffect(() => {
    const fileLink = document.createElement('a')
    fileLink.href = cvPdf
    fileLink.download = 'Lushkin_CV.pdf'

    fileLinkRef.current = fileLink
  }, [])

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
        <Button text={'download cv'} onClick={downloadCV} icon={faDownload} />
      </div>
    </div>
  )
}
