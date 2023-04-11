import React from 'react'
import s from './Portfolio.module.scss'
import { PageTitle } from '../../common/components/PageTitle/PageTitle'
import cardsImg from '../../assets/images/cards.jpg'
import todoImg from '../../assets/images/todo.jpg'
import cartImg from '../../assets/images/cart.jpg'
import socialNetworkImg from '../../assets/images/social_network.jpg'
import beeImg from '../../assets/images/bee.jpg'
import flowerImg from '../../assets/images/flower.jpg'
import { Work } from './Work/Work'

const works = [
  {
    img: cardsImg,
    title: 'cards',
    technologies: 'React, Redux-Toolkit, Typescript, Material UI, SCSS',
    projectLink: 'https://meskal1.github.io/cards',
    repositoryLink: 'https://github.com/meskal1/cards',
  },
  {
    img: todoImg,
    title: 'todo',
    technologies: 'React, Redux-Toolkit, Typescript, Material UI',
    projectLink: 'https://sanyalu.github.io/todolist-incubator',
    repositoryLink: 'https://github.com/sanyalu/todolist-incubator',
  },
  {
    img: cartImg,
    title: 'cart',
    technologies: 'React, Redux-Toolkit, Typescript, Styled-Components, Firebase',
    projectLink: 'https://cart-sanyalu.vercel.app/',
    repositoryLink: 'https://github.com/sanyalu/cart',
  },
  {
    img: socialNetworkImg,
    title: 'social-network',
    technologies: 'React(class-components), Redux, Redux-Thunk, Typescript',
    projectLink: 'https://sanyalu.github.io/react-samuraj-ts',
    repositoryLink: 'https://github.com/sanyalu/react-samuraj-ts',
  },
  {
    img: flowerImg,
    title: 'in-progress',
    technologies: 'in-progress',
    projectLink: '',
    repositoryLink: '',
  },
  {
    img: beeImg,
    title: 'in-progress',
    technologies: 'in-progress',
    projectLink: '',
    repositoryLink: '',
  },
]

export const Portfolio = () => {
  return (
    <div className={s.portfolio}>
      <div className={s.container}>
        <PageTitle firstTextPart={'my'} secondTextPart={'portfolio'} backgroundText={'works'} />
        <div className={s.works}>
          {works.map((w, i) => (
            <Work
              key={i}
              img={w.img}
              title={w.title}
              technologies={w.technologies}
              projectLink={w.projectLink}
              repositoryLink={w.repositoryLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
