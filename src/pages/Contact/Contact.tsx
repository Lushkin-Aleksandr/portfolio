import React from 'react'
import s from './Contact.module.scss'
import { PageTitle } from '../../common/components/PageTitle/PageTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { ContactForm } from './ContactForm/ContactForm'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

export const Contact = () => {
  return (
    <div className={s.contact}>
      <div className={s.container}>
        <PageTitle firstTextPart={'get in'} secondTextPart={'touch'} backgroundText={'contact'} />
        <div className={s.content}>
          <div className={s.info}>
            <h3 className={s.infoTitle}>Thanks for checking out my portfolio!</h3>
            <p className={s.text}>
              If you're interested in working together or have any questions, please don't hesitate
              to get in touch. Simply fill out the contact form below or reach out to me directly
              via email or social media. I look forward to connecting with you soon!
            </p>
            <div className={s.contactItems}>
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
            </div>
            <div className={s.socialNetworks}>
              <a
                target={'_blank'}
                href={'https://linkedin.com/in/sanyalu'}
                className={s.socialNetwork}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a target={'_blank'} href={'https://github.com/sanyalu'} className={s.socialNetwork}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a target={'_blank'} href={'https://t.me/SanyaLu'} className={s.socialNetwork}>
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a
                target={'_blank'}
                href={'https://www.facebook.com/profile.php?id=100091219977077'}
                className={s.socialNetwork}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
