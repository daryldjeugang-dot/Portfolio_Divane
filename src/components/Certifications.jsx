import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Certifications.css'

export default function Certifications() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const badges = t('certifications.list', { returnObjects: true })
  const scrollingBadges = [...badges, ...badges]

  return (
    <section id="certifications">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('certifications.label')}</div>
          <h2>{t('certifications.heading')}</h2>
          <p>{t('certifications.subtitle')}</p>
        </div>
        <div
          className={`certs-showcase ${visible ? 'visible' : ''}`}
        >
          <div
            className="certs-stage"
            aria-roledescription="carrousel"
            tabIndex={0}
          >
            <div className="certs-track">
              {scrollingBadges.map((cert, i) => (
                <CertCard
                  key={`${cert.file}-${i}`}
                  cert={cert}
                  duplicate={i >= badges.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CertCard({ cert, duplicate }) {
  const [ref, visible] = useInView()
  const thumb = `/assets/documents/badges/thumbs/${cert.file.replace('.pdf', '.png')}`

  return (
    <article
      className={`cert-card ${visible ? 'visible' : ''}`}
      ref={ref}
      aria-hidden={duplicate ? 'true' : undefined}
    >
      <a
        href={`/assets/documents/badges/${cert.file}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-preview-link"
        aria-label={`Voir ${cert.title}`}
        tabIndex={duplicate ? -1 : undefined}
      >
        <img src={thumb} alt={cert.title} className="cert-preview-img" loading="lazy" />
      </a>
      <div className="cert-content">
        <span className="cert-year">{cert.year}</span>
        <h4>{cert.title}</h4>
        <div className="cert-issuer">{cert.issuer}{cert.year ? ` · ${cert.year}` : ''}</div>
        <p>{cert.desc}</p>
      </div>
      <a
        href={`/assets/documents/badges/${cert.file}`}
        className="btn btn-outline cert-btn"
        download
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicate ? -1 : undefined}
      >
        <i className="fas fa-download" /> PDF
      </a>
    </article>
  )
}
