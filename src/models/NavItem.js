/**
 * A link in the top navigation bar.
 *
 * `href` points at an on-page section id (e.g. "#about"), so clicking scrolls
 * smoothly down the single-page site.
 */
export class NavItem {
  /**
   * @param {string} label - Text shown in the navbar, e.g. "Services".
   * @param {string} href  - Anchor to scroll to, e.g. "#services".
   */
  constructor(label, href) {
    this.label = label
    this.href = href
  }
}
