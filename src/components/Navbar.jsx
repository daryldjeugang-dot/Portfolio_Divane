import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useTranslation } from '../context/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const { t, lang, setLang } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact']
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
    { label: t('nav.skills'), id: 'skills' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.education'), id: 'education' },
    { label: t('nav.certifications'), id: 'certifications' },
    { label: t('nav.contact'), id: 'contact' },
  ]

  const toggleLang = () => setLang(lang === 'fr' ? 'en' : 'fr')

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <button className="nav-logo" onClick={() => scrollTo('home')}>
          &lt;<span>daryl</span>/&gt;
        </button>
        <div className="nav-actions">
          <button className="lang-toggle-btn" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label={lang === 'fr' ? 'Basculer le thème' : 'Toggle theme'}>
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`} />
          </button>
          <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <i className={`fas fa-${open ? 'times' : 'bars'}`} />
          </button>
        </div>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
          {links.map(l => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo(l.id) }}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
