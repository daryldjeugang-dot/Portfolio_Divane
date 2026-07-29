import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Projects.css'

export default function Projects() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const projects = t('projects.list', { returnObjects: true })

  return (
    <section id="projects">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('projects.label')}</div>
          <h2>{t('projects.heading')}</h2>
          <p>{t('projects.subtitle')}</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const [ref, visible] = useInView()

  return (
    <div className={`project-card ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="icon" style={{ background: `${project.color}20`, color: project.color }}>
        <i className={`fas fa-${project.icon}`} />
      </div>
      <h4>{project.title}</h4>
      <div className="tech">{project.tech}</div>
      <p>{project.desc}</p>
      <div className="tags">
        {project.tags.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
