import { useState, useEffect } from 'react'
import { useTranslation } from '../context/LanguageContext'
import './Hero.css'

function Typewriter({ text }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplayed(text.replace('\\n', '<br>'))
      setDone(true)
      return
    }
    let i = 0
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i).replace('\\n', '<br>'))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, 38)
    return () => clearInterval(interval)
  }, [text])

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: displayed }} />
      {done && <span className="cursor">&nbsp;</span>}
    </>
  )
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero grid-bg" id="home">
      <div className="hero-bg">
        <div className="gradient-1" />
        <div className="gradient-2" />
      </div>
      <div className="container">
        <div className="hero-badge">
          <span className="dot" />
          {t('hero.badge')}
        </div>
        <h1>
          <Typewriter text={t('hero.name')} />
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <p className="hero-meta">
          {t('hero.meta')}
        </p>
        <div className="hero-tags">
          {t('hero.tags', { returnObjects: true }).map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <i className="fas fa-arrow-right" /> {t('hero.btnProjects')}
          </a>
          <a href="/assets/documents/CV_Divane_Daryl.pdf" className="btn btn-outline" download>
            <i className="fas fa-download" /> {t('hero.btnCv')}
          </a>
        </div>
      </div>
    </section>
  )
}
