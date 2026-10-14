import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import { personalInfo } from '../data/content'
import './Contact.css'

export default function Contact() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const fields = t('contact.infoFields', { returnObjects: true })
  const form = t('contact.form', { returnObjects: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name') || ''
    const message = data.get('message') || ''
    const waMessage = encodeURIComponent(`Bonjour, je suis ${name}.\n\n${message}`)
    window.open(`https://wa.me/${personalInfo.whatsapp}?text=${waMessage}`, '_blank')
    e.target.reset()
  }

  return (
    <section id="contact">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('contact.label')}</div>
          <h2>{t('contact.heading')}</h2>
          <p>{t('contact.subtitle')}</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>{t('contact.infoHeading')}</h3>
            <p>{t('contact.infoText')}</p>

            <div className="contact-item">
              <i className="fas fa-envelope" />
              <div>
                <div className="lbl">{fields.email}</div>
                <div className="val">{personalInfo.email}</div>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone" />
              <div>
                <div className="lbl">{fields.phone}</div>
                {personalInfo.phone.map((p, i) => (
                  <div key={i} className="val">{p}</div>
                ))}
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-location-dot" />
              <div>
                <div className="lbl">{fields.location}</div>
                <div className="val">{personalInfo.location}</div>
              </div>
            </div>

            <div className="contact-item">
              <i className="fab fa-whatsapp" style={{ color: '#25D366' }} />
              <div>
                <div className="lbl">{fields.whatsapp}</div>
                <div className="val">
                  <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    {personalInfo.phone[0]}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <i className="fab fa-github" />
              <div>
                <div className="lbl">{fields.github}</div>
                <div className="val">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    {personalInfo.github.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h4>{form.heading}</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{form.name}</label>
                <input type="text" id="name" name="name" placeholder={form.namePlaceholder} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">{form.message}</label>
                <textarea id="message" name="message" placeholder={form.messagePlaceholder} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <i className="fab fa-whatsapp" /> {form.submit}
              </button>
            </form>
            <div className="form-whatsapp-note">
              <i className="fas fa-info-circle" />
              <span>{t('contact.whatsappNote')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
