import { useState, useEffect } from 'react'
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
  return (
    <section className="hero grid-bg" id="home">
      <div className="hero-bg">
        <div className="gradient-1" />
        <div className="gradient-2" />
      </div>
      <div className="container">
        <div className="hero-badge">
          <span className="dot" />
          Ouvert aux opportunités
        </div>
        <h1>
          <Typewriter text="DIVANE DARYL\nNDJAGA DJEUGANG" />
        </h1>
        <p className="hero-subtitle">
          Étudiant en Cybersécurité, Réseaux &amp; Administration Systèmes
        </p>
        <p className="hero-meta">
          Futur ingénieur en cybersécurité | Passionné de réseaux et de systèmes
        </p>
        <div className="hero-tags">
          <span>Cybersécurité</span>
          <span>Réseaux</span>
          <span>Linux</span>
          <span>Windows Server</span>
          <span>Python</span>
          <span>Cloud</span>
        </div>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <i className="fas fa-arrow-right" /> Voir mes projets
          </a>
          <a href="/assets/documents/CV_Divane_Daryl.pdf" className="btn btn-outline" download>
            <i className="fas fa-download" /> Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  )
}
