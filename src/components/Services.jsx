import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Services.css'

export default function Services() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const cards = t('services.cards', { returnObjects: true })

  return (
    <section id="services" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('services.label')}</div>
          <h2>{t('services.heading')}</h2>
          <p>{t('services.subtitle')}</p>
        </div>
        <div className="services-grid">
          {cards.map((card, i) => (
            <ServiceCard key={i} card={card} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ card, delay }) {
  const [ref, visible] = useInView()

  return (
    <div
      className={`service-card threed-tilt-element ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="threed-tilt-spotlight" />
      <div className="service-icon" style={{ background: `${card.color}20`, color: card.color }}>
        <i className={`fas fa-${card.icon}`} />
      </div>
      <h4>{card.title}</h4>
      <p>{card.desc}</p>
    </div>
  )
}
