import React, { useState } from 'react'
import s from './ContactForm.module.scss'
import { Input } from '../../../common/components/Input/Input'
import { Textarea } from '../../../common/components/Textarea/Textarea'
import { Button } from '../../../common/components/Button/Button'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type TSendingStatus = 'idle' | 'sending'

export const orderSchema = Yup.object({
  name: Yup.string().required('Name is required!'),
  email: Yup.string().required('Email is required!').email('Please enter a correct email!'),
  subject: Yup.string().required('Subject is required!'),
  message: Yup.string().required('Message is required!'),
})

export const ContactForm = () => {
  const [sendingStatus, setSendingStatus] = useState<TSendingStatus>('idle')

  const { getFieldProps, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: orderSchema,
    onSubmit: async (values, formikHelpers) => {
      setSendingStatus('sending')
      await fetch(`${import.meta.env.VITE_BASE_URL}sendMessage`, {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      formikHelpers.resetForm()
      setSendingStatus('idle')
    },
  })

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputDivider}>
        <div className={s.inputHolder}>
          <Input
            className={s.input}
            placeholder={'your name'}
            {...getFieldProps('name')}
            error={touched.name && errors.name}
          />
        </div>
        <div className={s.inputHolder}>
          <Input
            className={s.input}
            placeholder={'your email'}
            {...getFieldProps('email')}
            error={touched.email && errors.email}
          />
        </div>
      </div>
      <div className={s.inputHolder}>
        <Input
          className={s.input}
          placeholder={'your subject'}
          {...getFieldProps('subject')}
          error={touched.subject && errors.subject}
        />
      </div>
      <div className={s.inputHolder}>
        <Textarea
          className={s.textarea}
          placeholder={'your message'}
          {...getFieldProps('message')}
          error={touched.message && errors.message}
        />
      </div>
      <Button
        type={'submit'}
        text={'send message'}
        icon={faPaperPlane}
        loading={sendingStatus === 'sending'}
      />
    </form>
  )
}
