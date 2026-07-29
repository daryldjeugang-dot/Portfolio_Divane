import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './About.css'

export default function About() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()

  return (
    <section id="about">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('about.label')}</div>
          <h2>{t('about.heading')}</h2>
        </div>
        <div className="about-grid">
          <div className="about-image">
            <div className="placeholder">
              <img src="/assets/images/photo.jpeg" alt="Divane Daryl Ndjaga Djeugang" className="profile-photo" />
            </div>
            <div className="badge-exp">
              <div className="num">{t('about.badge.num')}</div>
              <div className="lbl">{t('about.badge.label')}</div>
            </div>
          </div>
          <div className="about-text">
            <h3>{t('about.subheading')}</h3>
            {t('about.text', { returnObjects: true }).map((p, i) => <p key={i}>{p}</p>)}
            <div className="about-stats">
              {t('about.stats', { returnObjects: true }).map((s, i) => (
                <div key={i} className="about-stat">
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
