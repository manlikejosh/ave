import { ContactSubmission } from '../models/ContactSubmission.js'

/**
 * Handles what happens when the contact form is submitted.
 *
 * Right now this is "frontend only" — it validates the data and simulates a
 * send so the UI can show a success state. When you're ready to actually
 * deliver messages, this is the ONLY file you need to change: swap the body
 * of `send()` for a real call (e.g. a fetch to Formspree, or a Vercel API
 * route). Nothing in the components has to change.
 */
export class ContactFormService {
  /**
   * @param {ContactSubmission} submission
   * @returns {Promise<{ok: boolean, errors?: Object<string,string>}>}
   */
  async send(submission) {
    const errors = submission.validate()
    if (Object.keys(errors).length > 0) {
      return { ok: false, errors }
    }

    // --- Frontend-only stub -------------------------------------------------
    // Simulate a network request so the button can show a "Sending…" state.
    // To wire up real delivery later, replace everything below with, e.g.:
    //
    //   const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify(submission.clean()),
    //   })
    //   return { ok: res.ok }
    //
    await new Promise((resolve) => setTimeout(resolve, 700))
    // Log the cleaned payload so you can confirm what would be sent.
    console.info('[AVE contact form] submission (not yet delivered):', submission.clean())
    return { ok: true }
  }
}
