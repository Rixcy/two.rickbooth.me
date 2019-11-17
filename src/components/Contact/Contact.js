import React from 'react'
import PageHeader from '../common/PageHeader'

import axios from 'axios'

import * as Yup from 'yup'

import { Formik, Field } from 'formik'

import ReCAPTCHA from 'react-google-recaptcha'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'src/components/common/Button'

import {
  ContactWrapper,
  RightContent,
  ContactBox,
  ContactForm,
  MessageSent,
} from './Contact.style'
import Flex from '../common/Flex'

const recaptchaRef = React.createRef()
const messageSentRef = React.createRef()

const RecaptchaText = () => (
  <>
    <p className="grecaptcha__text">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy"> Privacy Policy</a> and
      <a href="https://policies.google.com/terms"> Terms of Service</a> apply.
    </p>
  </>
)

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .min(5, 'Too Short!')
    .required('Required'),
})

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <PageHeader>Get In Touch</PageHeader>
      <ContactBox>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            return axios({
              method: 'post',
              url: 'https://getform.io/f/c5e93710-23a2-4c1d-991f-833e7e58195f',
              data: data,
            })
              .then(() => {
                messageSentRef.current.style.opacity = '0.7'
                setTimeout(() => {
                  messageSentRef.current.style.opacity = '0'
                  setSubmitting(false)
                  resetForm()
                }, 2500)
              })
              .catch(err => {
                console.log(err)
              })
          }}
        >
          {({ isSubmitting, handleSubmit, errors, touched }) => (
            <ContactForm onSubmit={handleSubmit}>
              <Flex className="group__name-email">
                <label className="label__name">
                  <span>Name</span>
                  <Field
                    name="name"
                    type="input"
                    className={errors.name && touched.name ? 'invalid' : ''}
                  />
                </label>
                <label className="label__email">
                  <span>Email</span>
                  <Field
                    name="email"
                    type="input"
                    className={errors.email && touched.email ? 'invalid' : ''}
                  />
                </label>
              </Flex>
              <Flex>
                <label className="label__message">
                  <span>Message</span>
                  <Field
                    name="message"
                    component="textarea"
                    className={
                      errors.message && touched.message ? 'invalid' : ''
                    }
                  />
                </label>
              </Flex>
              <Flex justify="space-between">
                <RecaptchaText />
                <Button
                  disabled={isSubmitting}
                  className="submit__btn"
                  type="submit"
                >
                  <FontAwesomeIcon icon="paper-plane" /> Submit
                </Button>
                <MessageSent ref={messageSentRef}>
                  Message sent <FontAwesomeIcon icon="check" />
                </MessageSent>
              </Flex>
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LeSzcIUAAAAAAhk0fSFV8JYaNZiIeKSxrLUUoiT"
              />
            </ContactForm>
          )}
        </Formik>

        <RightContent>
          <FontAwesomeIcon size={'5x'} icon="envelope" />
        </RightContent>
      </ContactBox>
    </ContactWrapper>
  )
}
export default Contact
