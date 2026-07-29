import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Education.css'

export default function Education() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const education = t('education.list', { returnObjects: true })

  return (
    <section id="education">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('education.label')}</div>
          <h2>{t('education.heading')}</h2>
        </div>
        <div className="edu-grid">
          {education.map((edu, i) => (
            <div key={i} className={`edu-card ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="year">{edu.year}</div>
              <h4>{edu.title}</h4>
              <div className="school">{edu.school}</div>
              <p>{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
