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
      const response = await fetch('https://formspree.io/f/mbdqzwze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json().catch(() => ({}))
      if (response.ok) {
        setSuccessMessage('Mensaje enviado correctamente.')
        setForm({ nombre: '', email: '', mensaje: '' })
      } else {
        const serverError = data?.errors?.[0]?.message || data?.message || 'Envío fallido.'
        setErrors({ _form: serverError })
      }
    } catch (err) {
      setErrors({ _form: 'Error al enviar el mensaje. Inténtelo de nuevo más tarde.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      id='contact-form'
      ref={formRef}
      action='https://formspree.io/f/mbdqzwze'
      method='POST'
      className='contact_form'
      onSubmit={handleSubmit}
      noValidate
    >
      <div className='contact_form-field'>
        <label htmlFor='nombre' className='contact_form-label'>
          Tu nombre
        </label>
        <input
          id='nombre'
          className='contact_form-name'
          type='text'
          name='nombre'
          value={form.nombre}
          placeholder='Luis Alberto Valdés...'
          onChange={handleChange}
          autoComplete='name'
          required
          aria-required='true'
          aria-invalid={errors.nombre ? 'true' : undefined}
          aria-describedby={errors.nombre ? 'nombre-error' : undefined}
        />
        <small id='nombre-error' className='error-mesage' role='alert'>
          {errors.nombre || ''}
        </small>
      </div>

      <div className='contact_form-field'>
        <label htmlFor='email' className='contact_form-label'>
          Tu email
        </label>
        <input
          id='email'
          className='contact_form-email'
          type='email'
          name='email'
          placeholder='correo@ejemplo.com'
          value={form.email}
          onChange={handleChange}
          autoComplete='email'
          required
          aria-required='true'
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        <small id='email-error' className='error-mesage' role='alert'>
          {errors.email || ''}
        </small>
      </div>

      <div className='contact_form-field'>
        <label htmlFor='mensaje' className='contact_form-label'>
          Tu mensaje
        </label>
        <textarea
          id='mensaje'
          className='contact_form-message'
          placeholder='Escribe tu mensaje aquí'
          rows={5}
          name='mensaje'
          value={form.mensaje}
          onChange={handleChange}
          required
          aria-required='true'
          aria-invalid={errors.mensaje ? 'true' : undefined}
          aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
        />
        <small id='mensaje-error' className='error-mesage' role='alert'>
          {errors.mensaje || ''}
        </small>
      </div>

      <div aria-live='polite' role='status'>
        <small className='error-mesage'>{errors._form || ''}</small>
        <small className='success-mesage'>{successMessage || ''}</small>
      </div>

      <button
        type='submit'
        className='contact_form-submit'
        disabled={submitting}
        aria-busy={submitting}
      >
        {submitting ? 'Enviando...' : 'Enviar'}
      </button>

      <input type='hidden' name='_captcha' value='false' />
    </form>
  )
}
