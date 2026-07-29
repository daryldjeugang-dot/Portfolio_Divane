import { useInView } from '../hooks/useInView'
import { aboutText } from '../data/content'
import './About.css'

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">À propos</div>
          <h2>Qui suis-je ?</h2>
        </div>
        <div className="about-grid">
          <div className="about-image">
            <div className="placeholder">
              <img src="/assets/images/photo.jpeg" alt="Divane Daryl Ndjaga Djeugang" className="profile-photo" />
            </div>
            <div className="badge-exp">
              <div className="num">3+</div>
              <div className="lbl">Années d'études<br />en informatique</div>
            </div>
          </div>
          <div className="about-text">
            <h3>Étudiant en <span className="accent">Qualité, Sécurité Internet &amp; Réseau</span></h3>
            {aboutText.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
            <div className="about-stats">
              <div className="about-stat">
                <div className="num">3+</div>
                <div className="lbl">Projets réalisés</div>
              </div>
              <div className="about-stat">
                <div className="num">2</div>
                <div className="lbl">Stages effectués</div>
              </div>
              <div className="about-stat">
                <div className="num">10+</div>
                <div className="lbl">Technologies maîtrisées</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
