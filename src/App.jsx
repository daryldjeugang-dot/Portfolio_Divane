import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechDossier from './components/TechDossier'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleCanvas from './components/ParticleCanvas'
import { useTranslation } from './context/LanguageContext'

export default function App() {
  const { t } = useTranslation()

  return (
    <>
      <div className="cinematic-backdrop" aria-hidden="true">
        <div className="cinematic-portrait" />
        <div className="cinematic-noise" />
      </div>
      <ParticleCanvas />
      <a href="#main-content" className="skip-link">{t('nav.skip')}</a>
      <Navbar />
      <aside className="side-rail left-rail" aria-hidden="true">
        <span className="terminal-orb"><i className="fas fa-terminal" /></span>
        <span className="terminal-chip">&gt; chargement profil...</span>
      </aside>
      <aside className="side-rail right-rail" aria-label="Contrôles rapides">
        <button type="button" aria-label="Son">
          <i className="fas fa-volume-high" />
        </button>
        <button
          type="button"
          aria-label="Changer de langue"
          onClick={() => document.querySelector('.lang-toggle-btn')?.click()}
        >
          <i className="fas fa-globe" />
        </button>
      </aside>
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <TechDossier />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <a href="#contact" className="floating-cta" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
        <i className="fas fa-comments" /> <span>{t('nav.floating')}</span>
      </a>
    </>
  )
}
