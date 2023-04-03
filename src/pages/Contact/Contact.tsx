import React from 'react'
import s from './Contact.module.scss'
import { PageTitle } from '../../common/components/PageTitle/PageTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { ContactForm } from './ContactForm/ContactForm'

export const Contact = () => {
  return (
    <div className={s.contact}>
      <div className={s.container}>
        <PageTitle firstTextPart={'get in'} secondTextPart={'touch'} backgroundText={'contact'} />
        <div className={s.content}>
          <div className={s.info}>
            <h3 className={s.infoTitle}>Don't be shy ! </h3>
            <p className={s.text}>
              Feel free to get in touch with me. I am always open to discussing new projects,
              creative ideas or opportunities to be part of your visions.{' '}
            </p>
            <div className={s.contactItem}>
              <div className={s.iconHolder}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className={s.contactValue}>lushkin.work@gmail.com</div>
            </div>
            <div className={s.contactItem}>
              <div className={s.iconHolder}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className={s.contactValue}>+7 910 328 7879</div>
            </div>
            <div className={s.socialNetworks}>
              <div className={s.socialNetwork}></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
