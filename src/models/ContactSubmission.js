/**
 * Represents one contact-form submission.
 *
 * The model owns its own validation: ask an instance `.validate()` and it
 * returns a map of field -> error message. This keeps the rules in one place
 * instead of scattered through the component.
 */
export class ContactSubmission {
  /**
   * @param {{name?: string, email?: string, company?: string, message?: string}} fields
   */
  constructor({ name = '', email = '', company = '', message = '' } = {}) {
    this.name = name
    this.email = email
    this.company = company
    this.message = message
  }

  /** Trimmed, submission-ready copy of the data. */
  clean() {
    return new ContactSubmission({
      name: this.name.trim(),
      email: this.email.trim(),
      company: this.company.trim(),
      message: this.message.trim(),
    })
  }

  /**
   * Validate the fields.
   * @returns {Object<string, string>} errors keyed by field name; empty when valid.
   */
  validate() {
    const errors = {}
    const cleaned = this.clean()

    if (!cleaned.name) {
      errors.name = 'Please tell us your name.'
    }

    if (!cleaned.email) {
      errors.email = 'An email is required so we can reply.'
    } else if (!ContactSubmission.isValidEmail(cleaned.email)) {
      errors.email = 'That email doesn’t look right.'
    }

    if (!cleaned.message) {
      errors.message = 'Let us know a little about your business.'
    } else if (cleaned.message.length < 10) {
      errors.message = 'A few more words would help us prepare.'
    }

    return errors
  }

  /** True when there are no validation errors. */
  isValid() {
    return Object.keys(this.validate()).length === 0
  }

  /** Basic email shape check — good enough for a contact form. */
  static isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
}
