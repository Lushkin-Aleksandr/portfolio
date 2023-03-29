import React from 'react'
import s from './Home.module.scss'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { Button } from '../../common/components/Button/Button'

export const Home = () => {
  return (
    <div className={s.home}>
      <img className={s.mainPhoto} alt={'photo'} />
      <div className={s.info}>
        <h1 className={s.title}>
          I'm Aleksandr Lushkin
          <span>Front-end developer</span>
        </h1>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam asperiores
          autem beatae consequatur dignissimos doloribus eius facere iure nisi, odio odit
          perferendis porro praesentium quidem similique, sit suscipit, tempore.
        </p>
        <Button text={'More about me'} icon={faArrowRight} onClick={() => alert('sadf')} />
      </div>
    </div>
  )
}
