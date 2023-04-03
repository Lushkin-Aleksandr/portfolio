import React from 'react'
import s from './ContactForm.module.scss'
import { Input } from '../../../common/components/Input/Input'
import { Textarea } from '../../../common/components/Textarea/Textarea'
import { Button } from '../../../common/components/Button/Button'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const orderSchema = Yup.object({
  name: Yup.string().required('Name is required!'),
  email: Yup.string().required('Email is required!').email('Please enter a correct email!'),
  subject: Yup.string().required('Subject is required!'),
  message: Yup.string().required('Message is required!'),
})

export const ContactForm = () => {
  const { getFieldProps, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: orderSchema,
    onSubmit: (values, formikHelpers) => {
      alert(values)
      formikHelpers.resetForm()
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
      <Button text={'send message'} onClick={() => {}} icon={faPaperPlane} />
    </form>
  )
}
