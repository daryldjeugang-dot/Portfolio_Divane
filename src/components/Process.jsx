import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Process.css'

export default function Process() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true })

  return (
    <section id="process">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('process.label')}</div>
          <h2>{t('process.heading')}</h2>
        </div>
        <div className="process-grid">
          {steps.map((step, i) => (
            <ProcessStep key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }) {
  const [ref, visible] = useInView()

  return (
    <div className={`process-step ${visible ? 'visible' : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.15}s` }}>
      <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
      <div className="step-line" />
      <div className="step-icon">
        <i className={`fas fa-${step.icon}`} />
      </div>
      <h4>{step.title}</h4>
      <p>{step.desc}</p>
    </div>
  )
}
