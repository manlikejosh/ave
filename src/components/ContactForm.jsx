import { useState } from 'react'
import { ContactSubmission } from '../models/ContactSubmission.js'
import { ContactFormService } from '../services/ContactFormService.js'
import { contact } from '../data/siteContent.js'

// One shared instance of the service handles submissions. Swap its `send()`
// implementation (in services/ContactFormService.js) to deliver for real.
const formService = new ContactFormService()

const EMPTY_FIELDS = { name: '', email: '', company: '', message: '' }

/**
 * The contact form. It builds a ContactSubmission model from the inputs, asks
 * the model to validate itself, and hands it to the ContactFormService to send.
 * The component only worries about display — the rules live in the classes.
 */
export default function ContactForm() {
  const [fields, setFields] = useState(EMPTY_FIELDS)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success'

  function handleChange(event) {
    const { name, value } = event.target
    setFields((prev) => ({ ...prev, [name]: value }))
    // Clear a field's error as soon as the user edits it.
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const submission = new ContactSubmission(fields)

    const validationErrors = submission.validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')
    const result = await formService.send(submission)

    if (result.ok) {
      setStatus('success')
      setFields(EMPTY_FIELDS)
    } else {
      setErrors(result.errors || {})
      setStatus('idle')
    }
  }

  return (
    <section id="contact" className="bg-navy text-cream">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-script text-2xl text-cream/60">{contact.eyebrow}</p>
        <h2 className="font-serif text-4xl sm:text-5xl mt-2">{contact.heading}</h2>
        <p className="mt-4 text-cream/70 font-light">{contact.body}</p>

        {status === 'success' ? (
          <SuccessMessage onReset={() => setStatus('idle')} />
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-12 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={fields.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={fields.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <Field
              label="Company (optional)"
              name="company"
              value={fields.company}
              onChange={handleChange}
              error={errors.company}
            />

            <Field
              label="Tell us about your business"
              name="message"
              as="textarea"
              value={fields.message}
              onChange={handleChange}
              error={errors.message}
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-cream px-8 py-3 text-navy font-medium hover:bg-white transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

/**
 * A single labelled input (or textarea) with its inline error message.
 * Kept small and reusable so every field looks and behaves the same.
 */
function Field({ label, name, value, onChange, error, type = 'text', as = 'input' }) {
  const base =
    'w-full bg-transparent border-b py-3 text-cream placeholder-cream/30 outline-none transition-colors ' +
    (error ? 'border-mocha' : 'border-cream/30 focus:border-cream')

  return (
    <label className="block">
      <span className="text-sm text-cream/60">{label}</span>
      {as === 'textarea' ? (
        <textarea name={name} value={value} onChange={onChange} rows={4} className={`${base} resize-none`} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} className={base} />
      )}
      {error && <span className="mt-1 block text-sm text-mocha">{error}</span>}
    </label>
  )
}

/** Confirmation shown after a successful submission. */
function SuccessMessage({ onReset }) {
  return (
    <div className="mt-12 rounded-2xl border border-cream/20 p-10 text-center">
      <p className="font-serif text-3xl">{contact.successTitle}</p>
      <p className="mt-3 text-cream/70 font-light">{contact.successBody}</p>
      <button
        onClick={onReset}
        className="mt-6 text-sm text-cream/60 underline underline-offset-4 hover:text-cream"
      >
        Send another message
      </button>
    </div>
  )
}
