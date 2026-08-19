import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import { personalInfo } from '../data/content'
import './Contact.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [ref, visible] = useInView()
  const [status, setStatus] = useState('idle')
  const { t } = useTranslation()
  const fields = t('contact.infoFields', { returnObjects: true })
  const form = t('contact.form', { returnObjects: true })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.target)
    fd.append('_subject', fd.get('subject') || `Portfolio - ${personalInfo.name}`)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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
                    +237 680 29 28 80
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
                <label htmlFor="email">{form.email}</label>
                <input type="email" id="email" name="email" placeholder={form.emailPlaceholder} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{form.subject}</label>
                <input type="text" id="subject" name="subject" placeholder={form.subjectPlaceholder} />
              </div>
              <div className="form-group">
                <label htmlFor="message">{form.message}</label>
                <textarea id="message" name="message" placeholder={form.messagePlaceholder} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                <i className={`fas ${status === 'sending' ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`} /> {form.submit}
              </button>
              {status === 'success' && (
                <div className="form-alert form-alert-success">
                  <i className="fas fa-circle-check" /> {t('contact.alert')}
                </div>
              )}
              {status === 'error' && (
                <div className="form-alert form-alert-error">
                  <i className="fas fa-circle-exclamation" /> {t('contact.alertError')}
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
