import { useInView } from '../hooks/useInView'
import { skillCategories } from '../data/content'
import './Skills.css'

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">Compétences</div>
          <h2>Mes domaines d'expertise</h2>
          <p>Cybersécurité, Réseaux, Systèmes, Développement &amp; Données</p>
        </div>
        <div className="skills-categories">
          {skillCategories.map((cat, i) => (
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
