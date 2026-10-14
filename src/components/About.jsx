import { useTranslation } from '../context/LanguageContext'
import './About.css'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="intro-section">
      <div className="intro-container">
        <div className="eyebrow-wrap">
          <span className="eyebrow">{t('about.label')}</span>
          <span className="eyebrow-line" />
        </div>
        <h2 className="intro-title">
          {t('about.heading')} — {t('about.accent')}
        </h2>
        {t('about.text', { returnObjects: true }).map((p, i) => (
          <p key={i} className="intro-text">{p}</p>
        ))}
        <div className="about-stats">
          {t('about.stats', { returnObjects: true }).map((s, i) => (
            <div key={i} className="about-stat">
              <div className="num">{s.num}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
