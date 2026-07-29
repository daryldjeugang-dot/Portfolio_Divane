import { useInView } from '../hooks/useInView'
import { projects } from '../data/content'
import './Projects.css'

export default function Projects() {
  const [ref, visible] = useInView()

  return (
    <section id="projects">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">Projets</div>
          <h2>Réalisations</h2>
          <p>Des projets concrets alliant cybersécurité, réseaux et développement</p>
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
