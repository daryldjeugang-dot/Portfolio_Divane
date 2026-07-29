import { useInView } from '../hooks/useInView'
import { experiences } from '../data/content'
import './Experience.css'

export default function Experience() {
  const [ref, visible] = useInView()

  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">Expérience</div>
          <h2>Parcours professionnel</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ exp }) {
  const [ref, visible] = useInView()

  return (
    <div className={`timeline-item ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="timeline-dot" />
      <div className="date">{exp.date || exp.period}</div>
      <h4>{exp.title}</h4>
      <div className="org">{exp.org || exp.tag}</div>
      <ul>
        {exp.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}
