import { useInView } from '../hooks/useInView'
import { personalInfo } from '../data/content'
import './Contact.css'

export default function Contact() {
  const [ref, visible] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.')
    e.target.reset()
  }

  return (
    <section id="contact">
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">Contact</div>
          <h2>Restons en contact</h2>
          <p>Discutons de vos projets et opportunités</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Mes coordonnées</h3>
            <p>Disponible pour discuter de collaborations, stages ou opportunités dans le domaine de la cybersécurité et des réseaux.</p>

            <div className="contact-item">
              <i className="fas fa-envelope" />
              <div>
                <div className="lbl">Email</div>
                <div className="val">{personalInfo.email}</div>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone" />
              <div>
                <div className="lbl">Téléphone</div>
                {personalInfo.phone.map((p, i) => (
                  <div key={i} className="val">{p}</div>
                ))}
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-location-dot" />
              <div>
                <div className="lbl">Localisation</div>
                <div className="val">{personalInfo.location}</div>
              </div>
            </div>

            <div className="contact-item">
              <i className="fab fa-github" />
              <div>
                <div className="lbl">GitHub</div>
                <div className="val">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    {personalInfo.github.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h4>Envoyez-moi un message</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" placeholder="Votre nom" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="votre@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input type="text" id="subject" placeholder="Sujet du message" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Votre message..." required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <i className="fas fa-paper-plane" /> Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
