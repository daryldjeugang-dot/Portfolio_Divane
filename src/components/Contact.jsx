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
    alert(t('contact.alert'))
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
                <input type="text" id="name" placeholder={form.namePlaceholder} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{form.email}</label>
                <input type="email" id="email" placeholder={form.emailPlaceholder} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{form.subject}</label>
                <input type="text" id="subject" placeholder={form.subjectPlaceholder} />
              </div>
              <div className="form-group">
                <label htmlFor="message">{form.message}</label>
                <textarea id="message" placeholder={form.messagePlaceholder} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <i className="fas fa-paper-plane" /> {form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
