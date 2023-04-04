import React from 'react'
import s from './Home.module.scss'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { Button } from '../../common/components/Button/Button'
import mainPhoto from '../../assets/images/main_photo.jpg'

export const Home = () => {
  return (
    <div className={s.home}>
      <img className={s.mainPhoto} src={mainPhoto} alt={'photo'} />
      <div className={s.info}>
        <h1 className={s.title}>
          I'm Aleksandr Lushkin
          <span>Front-end developer</span>
        </h1>
        <p className={s.description}>
          Hi there! I'm a frontend React developer with a focus on creating dynamic and
          user-friendly interfaces. Check out my projects and feel free to get in touch if you're
          interested in collaborating or learning more about my skills and experience.
        </p>
        <Button text={'More about me'} icon={faArrowRight} onClick={() => alert('sadf')} />
      </div>
    </div>
  )
}
