import { useState, useRef, useCallback, useEffect } from 'react'
import { useTranslation } from '../context/LanguageContext'
import './TechDossier.css'

const techSkills = [
  { icon: 'fa-shield-halved', title: 'Cybersécurité', color: '#ef4444', skills: ['Pare-feu', 'VPN', 'Audit sécurité', 'Analyse de vulnérabilités'] },
  { icon: 'fa-network-wired', title: 'Réseaux', color: '#3b82f6', skills: ['MikroTik', 'DNS/DHCP', 'VLAN', '拓撲 réseau'] },
  { icon: 'fa-server', title: 'Administration', color: '#22c55e', skills: ['Linux', 'Windows Server', 'Active Directory', 'Docker'] },
  { icon: 'fa-code', title: 'Développement', color: '#7c3aed', skills: ['HTML/CSS/JS', 'Python', 'Django', 'React'] },
  { icon: 'fa-database', title: 'Data & Cloud', color: '#f59e0b', skills: ['SQL', 'Kafka', 'Cloud', 'IoT'] },
  { icon: 'fa-link', title: 'Blockchain', color: '#22d3ee', skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3'] },
]

export default function TechDossier() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const stageRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)

  const total = techSkills.length

  const next = useCallback(() => setActive(a => (a + 1) % total), [total])
  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || paused) return undefined
    const timer = window.setInterval(next, 3600)
    return () => window.clearInterval(timer)
  }, [next, paused])

  const onPointerDown = (e) => {
    isDragging.current = true
    startX.current = e.clientX
  }
  const onPointerMove = (e) => {
    if (!isDragging.current) return
    const dx = e.clientX - startX.current
    if (Math.abs(dx) > 60) {
      if (dx > 0) prev(); else next()
      isDragging.current = false
    }
  }
  const onPointerUp = () => { isDragging.current = false }

  return (
    <section id="tech-dossier">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow-wrap" style={{ justifyContent: 'center' }}>
            <span className="eyebrow">TECHNICAL DOSSIER</span>
            <span className="eyebrow-line" />
          </div>
          <h2>Core Technologies</h2>
        </div>

        <div className="carousel-wrapper" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
          <div className="carousel-stage" ref={stageRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
            {techSkills.map((skill, i) => {
              const offset = ((i - active + total) % total)
              const normalized = offset > total / 2 ? offset - total : offset
              const absN = Math.abs(normalized)
              const rotateY = normalized * -22
              const translateZ = absN === 0 ? 80 : -90 * absN
              const translateX = normalized * 260
              const scale = absN === 0 ? 1.08 : absN === 1 ? 0.92 : 0.78
              const opacity = absN <= 2 ? 1 : 0

              return (
                <div
                  key={i}
                  className={`carousel-card ${absN === 0 ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex: 10 - absN,
                  }}
                  onClick={() => setActive(i)}
                >
                  <div className="card-inner">
                    <div className="card-icon" style={{ color: skill.color, background: `${skill.color}20` }}>
                      <i className={`fas ${skill.icon}`} />
                    </div>
                    <h3>{skill.title}</h3>
                    <ul>
                      {skill.skills.map((s, j) => <li key={j}>{s}</li>)}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="carousel-controls">
            <button onClick={prev} aria-label="Previous"><i className="fas fa-chevron-left" /></button>
            <div className="carousel-dots">
              {techSkills.map((_, i) => (
                <button key={i} className={`dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} aria-label={`Card ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next"><i className="fas fa-chevron-right" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
