import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Campaign from './components/Campaign.jsx'
import Consultation from './components/Consultation.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

/**
 * The ooo landing page. Each section is its own component (see src/components),
 * and all copy lives in src/data/siteContent.js. Reorder or remove a section by
 * editing the list below.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Campaign />
        <Consultation />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
