import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Interests.css'

export default function Interests() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const languages = t('interests.languages.items', { returnObjects: true })
  const interests = t('interests.list', { returnObjects: true })

  return (
    <section id="interests" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('interests.label')}</div>
          <h2>{t('interests.heading')}</h2>
        </div>
        <div className="interests-grid">
          <div className="interests-card">
            <h4><i className="fas fa-language" /> {t('interests.languages.title')}</h4>
            {languages.map((lang, i) => (
              <div key={i} className="lang-item">
                <div className="lang-header">
                  <span>{lang.name}</span>
                  <span className="level">{lang.level}</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: lang.width }} /></div>
              </div>
            ))}
          </div>
          <div className="interests-card">
            <h4><i className="fas fa-heart" /> {t('interests.interestsTitle')}</h4>
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
