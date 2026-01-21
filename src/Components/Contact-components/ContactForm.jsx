import './contactForm.css'
import { useRef, useState } from 'react'
import { validateContact } from './contactFormValidation'

export default function ContactForm () {
  const formRef = useRef(null)
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccessMessage('')
    const res = validateContact(form)
    if (!res.success) {
      setErrors(res.errors)
      return
    }
    setErrors({})

    try {
      setSubmitting(true)
      const actionUrl = formRef.current?.action || 'https://formspree.io/f/xovqayag'
      const response = await fetch(actionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json().catch(() => ({}))
      if (response.ok) {
        setSuccessMessage('Message sent successfully.')
        setForm({ nombre: '', email: '', mensaje: '' })
      } else {
        const serverError = data?.errors?.[0]?.message || data?.message || 'Submission failed.'
        setErrors({ _form: serverError })
      }
    } catch (err) {
      setErrors({ _form: 'Network error. Please try again later.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      id='contact-form'
      ref={formRef}
      action='https://formspree.io/f/xovqayag'
      method='POST'
      className='contact_form'
      onSubmit={handleSubmit}
    >
      <input
        className='contact_form-name'
        placeholder='Your Name'
        type='text'
        name='nombre'
        value={form.nombre}
        onChange={handleChange}
        autoComplete='name'
      />
      <small className='error-mesage'>{errors.nombre || ''}</small>

      <input
        className='contact_form-email'
        placeholder='Your Email'
        type='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <small className='error-mesage'>{errors.email || ''}</small>

      <textarea
        className='contact_form-message'
        placeholder='Your message'
        rows={5}
        name='mensaje'
        value={form.mensaje}
        onChange={handleChange}
      />
      <small className='error-mesage'>{errors.mensaje || ''}</small>

      <small className='error-mesage'>{errors._form || ''}</small>
      <small style={{ color: 'green' }}>{successMessage}</small>

      <button type='submit' className='contact_form-submit' disabled={submitting}>
        {submitting ? 'Sending...' : 'Send'}
      </button>

      <input type='hidden' name='_captcha' value='false' />
    </form>
  )
}
