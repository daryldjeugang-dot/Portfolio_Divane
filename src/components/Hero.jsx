import { useState, useEffect } from 'react'
import { useTranslation } from '../context/LanguageContext'
import './Hero.css'

function Typewriter({ text }) {
  const lines = text.split('\n')
  const line0 = lines[0] || ''
  const line1 = lines[1] || ''
  const total = line0.length + 1 + line1.length
  const [idx, setIdx] = useState(total)
  const [done, setDone] = useState(true)
  const [restart, setRestart] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setIdx(total); setDone(true); return }
    setIdx(0); setDone(false)
    let i = 0
    const interval = setInterval(() => {
      i++
      setIdx(i)
      if (i > total) { setDone(true); clearInterval(interval) }
    }, 38)
    return () => clearInterval(interval)
  }, [text, restart])

  useEffect(() => {
    if (!done) return
    const timer = setTimeout(() => setRestart(r => r + 1), 7000)
    return () => clearTimeout(timer)
  }, [done])

  const len0 = line0.length
  const show0 = idx >= len0 ? line0 : line0.slice(0, idx)
  const rem1 = Math.max(0, idx - len0 - 1)
  const show1 = rem1 > 0 ? line1.slice(0, rem1) : ''

  return (
    <>
      <span>{show0}</span><br />
      <span>{show1}</span>
      <span className="cursor" style={{ visibility: done ? 'visible' : 'hidden' }}>&nbsp;</span>
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
        <div className="hero-content">
          <div className="hero-text">
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
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img src="/assets/images/photo_divane.png" alt="Divane Daryl Ndjaga Djeugang" />
              <i className="fas fa-star float-icon" style={{ top: '-10%', left: '-10%', fontSize: '1.4rem', color: '#f59e0b', animationDelay: '0s' }} />
              <i className="fas fa-laptop float-icon" style={{ top: '-12%', right: '-8%', fontSize: '1.3rem', color: 'var(--accent)', animationDelay: '0.6s' }} />
              <i className="fas fa-shield-halved float-icon" style={{ bottom: '-8%', left: '-8%', fontSize: '1.2rem', color: '#22c55e', animationDelay: '1.2s' }} />
              <i className="fas fa-code float-icon" style={{ bottom: '-6%', right: '-10%', fontSize: '1.3rem', color: 'var(--purple)', animationDelay: '0.3s' }} />
              <i className="fas fa-network-wired float-icon" style={{ top: '40%', left: '-14%', fontSize: '1rem', color: 'var(--accent)', animationDelay: '0.9s' }} />
              <i className="fas fa-server float-icon" style={{ top: '45%', right: '-12%', fontSize: '1.1rem', color: '#f59e0b', animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
