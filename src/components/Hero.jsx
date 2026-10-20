import { useState, useEffect } from 'react'
import { useTranslation } from '../context/LanguageContext'
import TerminalPanel from './TerminalPanel'
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
  const tags = t('hero.tags', { returnObjects: true })
  const proof = t('hero.proof', { returnObjects: true })

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <p className="hero-eyebrow">
              <span>{t('hero.eyebrow')}</span>
              <span className="eyebrow-line" />
            </p>
            <h1 className="hero-name">
              <span className="name-orange">
                <Typewriter text={t('hero.name')} />
              </span>
            </h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <p className="hero-typewriter-line">
              <span className="typewriter-dot" />
              <Typewriter text={t('hero.meta')} />
            </p>
            <div className="hero-tags">
              {tags.map((tag, i) => (
                <span key={i} className="hero-tag">{tag}</span>
              ))}
            </div>
            <p className="hero-bio">{t('hero.quote_body')}</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                <i className="fas fa-folder-open" /> {t('hero.btnProjects')}
              </a>
<a href="/assets/documents/CV_Divane_Daryl_Ndjaga_Djeugang.pdf" className="btn btn-outline" download>
                <i className="fas fa-download" /> {t('hero.btnCv')}
              </a>
            </div>
            <div className="hero-proof" aria-label={t('hero.proofLabel')}>
              {proof.map((item, i) => (
                <div key={i} className="hero-proof-item">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-social">
              <a href="https://github.com/daryldjeugang-dot" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href="mailto:daryldjeugang@gmail.com" aria-label="Email">
                <i className="fas fa-envelope" />
              </a>
              <a href="https://wa.me/237680292880" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          <div className="hero-center">
            <div className="hero-image-wrapper">
              <img src="/assets/images/photo_divane.png" alt="Divane Daryl Ndjaga Djeugang" />
            </div>
          </div>

          <div className="hero-right">
            <TerminalPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
