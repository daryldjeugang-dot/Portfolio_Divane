import { useState, useEffect } from 'react'
import { useTranslation } from '../context/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const { t, lang, setLang } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)')
    const onChange = () => {
      setIsMobile(media.matches)
      if (!media.matches) setOpen(false)
    }
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const ids = ['home', 'about', 'services', 'projects', 'experience', 'education', 'certifications', 'contact']
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    }, { rootMargin: '-40% 0px -55% 0px' })
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const links = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.education'), id: 'education' },
    { label: t('nav.certifications'), id: 'certifications' },
    { label: t('nav.contact'), id: 'contact' },
  ]

  const toggleLang = () => setLang(lang === 'fr' ? 'en' : 'fr')

  return (
    <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`} aria-label="Navigation principale">
      <div className="container">
        <button className="nav-logo" type="button" onClick={() => scrollTo('home')}>
          &lt;<span>daryl</span>/&gt;
        </button>
        <div className="live-signal">
          <span className="signal-dot" />
          <span className="signal-text">{t('nav.live')}</span>
        </div>
        {(!isMobile || open) && (
          <ul id="main-navigation" className={`nav-links ${open ? 'active' : ''}`}>
            {links.map(l => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo(l.id) }}>{l.label}</a>
              </li>
            ))}
          </ul>
        )}
        <div className="nav-actions">
          <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>
            {t('nav.cta')} <i className="fas fa-arrow-right" />
          </a>
          <button className="lang-toggle-btn" type="button" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button
            className="nav-toggle"
            type="button"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            <i className={`fas fa-${open ? 'times' : 'bars'}`} />
          </button>
        </div>
      </div>
    </nav>
  )
}
