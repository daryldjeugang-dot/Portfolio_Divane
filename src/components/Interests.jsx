import { useInView } from '../hooks/useInView'
import { interests } from '../data/content'
import './Interests.css'

export default function Interests() {
  const [ref, visible] = useInView()

  return (
    <section id="interests" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">Atouts</div>
          <h2>Langues &amp; Centres d'intérêt</h2>
        </div>
        <div className="interests-grid">
          <div className="interests-card">
            <h4><i className="fas fa-language" /> Langues</h4>
            <div className="lang-item">
              <div className="lang-header">
                <span>Français</span>
                <span className="level">C1 — Courant</span>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '90%' }} /></div>
            </div>
            <div className="lang-item">
              <div className="lang-header">
                <span>Anglais</span>
                <span className="level">B2 — Intermédiaire</span>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '70%' }} /></div>
            </div>
          </div>
          <div className="interests-card">
            <h4><i className="fas fa-heart" /> Centres d'intérêt</h4>
            <div className="skill-tags" style={{ marginTop: 0 }}>
              {interests.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
