import React, { FC, useState } from 'react'
import s from './Work.module.scss'
import { Modal } from '../../../common/components/Modal/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare'

type PropsType = {
  img: string
  title: string
  technologies: string
  projectLink: string
  repositoryLink: string
}

export const Work: FC<PropsType> = ({ img, title, repositoryLink, projectLink, technologies }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className={s.work} onClick={() => setShowModal(true)}>
        <img className={s.img} src={img} alt="" />
        <div className={s.workOverlay}>
          <span className={s.workTitle}>{title}</span>
        </div>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className={s.workModal}>
          <h3 className={s.workModalTitle}>{title}</h3>
          <img className={s.img} src={img} alt="" />
          <div className={s.tech}>
            <span>Technologies: </span>
            {technologies}
          </div>
          <div className={s.links}>
            <div>
              <a className={s.link} href={projectLink} target={'_blank'}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                &nbsp; view project
              </a>
            </div>
            <div>
              <a className={s.link} href={repositoryLink} target={'_blank'}>
                <FontAwesomeIcon icon={faCode} />
                &nbsp; view repository
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
