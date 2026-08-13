# AVE. — Marketing Consultancy Landing Page

A single-page marketing site for **AVE. (The Avenue)**, built to be easy to read and edit.

- **React 19** (functional components for the UI)
- **Plain JS classes** for the data models and form logic (the "object-oriented" part)
- **Tailwind CSS v4** for styling (configured CSS-first in `src/index.css`)
- **Vite** for dev/build
- Deployed on **Vercel**

## Run it locally

```bash
npm install      # first time only
npm run dev      # start the dev server (prints a localhost URL)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Where to edit things

Everything is organised so you rarely have to hunt:

| I want to change… | Edit this file |
| --- | --- |
| **Any wording on the page** (headlines, services, contact copy, email) | `src/data/siteContent.js` |
| **Brand colours or fonts** | `src/index.css` (the `@theme` block at the top) |
| **A specific section's layout** | the matching file in `src/components/` (`Hero`, `About`, `Services`, `Consultation`, `ContactForm`, `Footer`, `Navbar`) |
| **Contact-form rules** (what counts as valid) | `src/models/ContactSubmission.js` |
| **What happens when the form is submitted** | `src/services/ContactFormService.js` |

### How the code is structured

```
src/
  models/                 Plain classes describing data
    Service.js              one service the team offers
    NavItem.js              one link in the navbar
    ContactSubmission.js    a contact-form entry + its own validation rules
  services/
    ContactFormService.js   decides what happens on submit (see note below)
  data/
    siteContent.js          ALL the site's copy, in one place
  components/               React components — one per visual section
  App.jsx                   lists the sections in order
  index.css                 Tailwind + brand theme tokens
```

The idea: **components handle how things look**, **models/services handle the
data and rules**. So changing a validation message or the colour palette never
means digging through layout code.

## Contact form

Right now the form is **frontend-only**: it validates input and shows a success
message, but does not yet deliver the message anywhere. To turn on real
delivery, edit the `send()` method in
[`src/services/ContactFormService.js`](src/services/ContactFormService.js) — it
has a commented-out example for [Formspree](https://formspree.io). Nothing else
needs to change.

## Deploying

The project is a standard Vite app, which Vercel auto-detects:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Pushing to the connected GitHub repo triggers a new Vercel deployment.
