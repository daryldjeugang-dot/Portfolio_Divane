import { useTranslation } from '../context/LanguageContext'
import { personalInfo } from '../data/content'
import './Footer.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer-cinematic-wrapper">
      <div className="footer-grain-overlay" aria-hidden="true" />
      <div className="footer-watermark-marquee" aria-hidden="true">
        <div className="footer-watermark-track">
          <span>{personalInfo.nameShort.toUpperCase()} —&nbsp;</span>
          <span>{personalInfo.nameShort.toUpperCase()} —&nbsp;</span>
          <span>{personalInfo.nameShort.toUpperCase()} —&nbsp;</span>
          <span>{personalInfo.nameShort.toUpperCase()} —&nbsp;</span>
        </div>
      </div>
      <div className="footer-content-container">
        <div className="footer-typography-scene">
          <div className="ft-line ft-line--1">
            <span className="ft-text ft-text--solid">{t('footer.huge_1')}</span>
          </div>
          <div className="ft-line ft-line--2">
            <span className="ft-text ft-text--outline">{t('footer.huge_2')}</span>
          </div>
          <div className="ft-line ft-line--3">
            <span className="ft-text ft-text--orange">{t('footer.huge_3')}</span>
          </div>
        </div>
        <div className="footer-cta-box">
          <h4>{t('footer.cta_title')}</h4>
          <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            {t('footer.cta_button')} <i className="fas fa-arrow-right" />
          </a>
        </div>
        <div className="footer-bottom-layout">
          <nav className="footer-creative-nav">
            <ul className="footer-nav-list">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>{t('footer.nav_about')}</a></li>
              <li><a href="#education" onClick={(e) => { e.preventDefault(); document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }) }}>{t('footer.nav_education')}</a></li>
              <li><a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) }}>{t('footer.nav_experience')}</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>{t('footer.nav_projects')}</a></li>
              <li><a href="#certifications" onClick={(e) => { e.preventDefault(); document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }) }}>{t('footer.nav_certifications')}</a></li>
            </ul>
          </nav>
          <div className="footer-socials">
            <a href="https://github.com/daryldjeugang-dot" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
          </div>
          <p className="footer-signature">
            &copy; {new Date().getFullYear()} &mdash; {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
