import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Experience.css'

export default function Experience() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const experiences = t('experience.list', { returnObjects: true })

  return (
    <section id="experience">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('experience.label')}</div>
          <h2>{t('experience.heading')}</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ exp, index }) {
  const [ref, visible] = useInView()

  return (
    <div
      className={`timeline-item ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="timeline-dot">
        <i className="fas fa-briefcase" aria-hidden="true" />
      </div>
      <article className="timeline-card">
        <div className="date">{exp.date || exp.period}</div>
        <h4>{exp.title}</h4>
        <div className="org">{exp.org || exp.tag}</div>
        <ul>
          {exp.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </article>
    </div>
  )
}
