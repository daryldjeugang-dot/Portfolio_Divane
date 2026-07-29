import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Skills.css'

export default function Skills() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const categories = t('skills.categories', { returnObjects: true })

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('skills.label')}</div>
          <h2>{t('skills.heading')}</h2>
          <p>{t('skills.subtitle')}</p>
        </div>
        <div className="skills-categories">
          {categories.map((cat, i) => (
            <SkillCategory key={i} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ cat }) {
  const [ref, visible] = useInView()

  return (
    <div className={`skill-category ${visible ? 'visible' : ''}`} ref={ref}>
      <h3><i className={`fas fa-${cat.icon}`} /> {cat.title}</h3>
      <div className="skill-tags">
        {cat.items.map((item, i) => (
          <span key={i} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>
  )
}
