import React, { useState } from 'react'
import PageHeader from '../common/PageHeader'

import ReCAPTCHA from 'react-google-recaptcha'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'src/components/common/Button'

import { ContactWrapper, RightContent, ContactBox, ContactForm } from './Contact.style'

const recaptchaRef = React.createRef()

function Contact() {
  const [formData, setformData] = useState({ _replyto: '', name: '', message: '' })
  const [errors, setErrors] = useState({ _replyto: '', name: '', message: '' })

  let emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  let nameregex = /^[a-zA-Z\s]*[^\s]$/gim
  let messageregex = /^[\w\d][^<>/\\&]*$/gim

  function check(value, field, regex, text) {
    if (!value) {
      setErrors({ ...errors, [field]: `Your ${text} is required` })
      return true
    } else if (!regex.test(value)) {
      setErrors({ ...errors, [field]: `Your ${text} is not valid` })
      return true
    } else {
      setErrors({ ...errors, [field]: '' })
      return false
    }
  }

  const validateForm = (name, value) => {
    switch (name) {
      case '_replyto':
        return !check(value, '_replyto', emailregex, 'Email')
      case 'name':
        return !check(value, 'name', nameregex, 'Name')
      case 'message':
        return !check(value, 'message', messageregex, 'Message')
      default:
        break
    }
  }

  const handleInput = e => {
    e.preventDefault()
    const { name, value } = e.target
    validateForm(name, value)
    setformData({ ...formData, [name]: value })
    recaptchaRef.current.execute()
  }

  return (
    <ContactWrapper id="contact">
      <PageHeader>Get In Touch</PageHeader>
      <ContactBox>
        <ContactForm
          noValidate
          onSubmit={event => {
            let isValid = true
            for (let i in formData) {
              if (!validateForm(i, formData[i])) {
                isValid = false
                break
              }
            }
            !isValid && event.preventDefault()
          }}
          action="https://getform.io/f/c5e93710-23a2-4c1d-991f-833e7e58195f"
          method="POST"
        >
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            badge="inline"
            sitekey="6LeSzcIUAAAAAAhk0fSFV8JYaNZiIeKSxrLUUoiT"
          />
          <label className="label__email">
            <span>Email</span>
            <input
              className={errors._replyto && 'invalid'}
              onChange={handleInput}
              value={formData.email}
              id="email"
              name="_replyto"
              required
              placeholder="example@gmail.com"
            />
          </label>
          <label className="label__name">
            <span>Name</span>
            <input
              className={errors.name && 'invalid'}
              onChange={handleInput}
              value={formData.name}
              name="name"
              type="text"
              required
            />
          </label>
          <label className="label__message">
            <span>Message</span>
            <textarea
              className={errors.message && 'invalid'}
              onChange={handleInput}
              value={formData.message}
              name="message"
              required
            />
          </label>

          <Button className="submit__btn" as="button" type="submit" value="send">
            <FontAwesomeIcon icon="paper-plane" /> Submit
          </Button>
        </ContactForm>

        <RightContent>
          <FontAwesomeIcon size={'5x'} icon="envelope" />
        </RightContent>
      </ContactBox>
    </ContactWrapper>
  )
}
export default Contact
