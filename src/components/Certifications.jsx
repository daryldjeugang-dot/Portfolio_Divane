import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Certifications.css'

export default function Certifications() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const certs = t('certifications.list', { returnObjects: true })

  return (
    <section id="certifications" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('certifications.label')}</div>
          <h2>{t('certifications.heading')}</h2>
          <p>{t('certifications.subtitle')}</p>
        </div>
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertCard({ cert }) {
  const [ref, visible] = useInView()

  return (
    <div className={`cert-card ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="cert-icon">
        <i className="fas fa-certificate" />
      </div>
      <h4>{cert.title}</h4>
      <div className="cert-issuer">{cert.issuer}</div>
      <p>{cert.desc}</p>
      <a href={`/assets/documents/${cert.file}`} className="btn btn-outline cert-btn" download target="_blank">
        <i className="fas fa-download" /> PDF
      </a>
    </div>
  )
}
