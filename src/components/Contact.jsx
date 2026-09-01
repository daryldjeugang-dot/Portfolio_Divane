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
    const subject = encodeURIComponent(data.get('subject') || `Message depuis le portfolio - ${personalInfo.name}`)
    const body = encodeURIComponent(
      `Nom : ${data.get('name')}\nEmail : ${data.get('email')}\n\n${data.get('message')}`
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
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
