/**
 * A single service that the AVE. team offers.
 *
 * This is a plain data class (a "model"). Keeping it as a class means every
 * service in the site is built the same way and can grow later — e.g. you
 * could add an `icon` or `slug` field in one place and every service gets it.
 */
export class Service {
  /**
   * @param {string} title       - Name of the service, e.g. "Brand & Marketing".
   * @param {string} description - One-line explanation shown under the title.
   */
  constructor(title, description) {
    this.title = title
    this.description = description
  }
}
