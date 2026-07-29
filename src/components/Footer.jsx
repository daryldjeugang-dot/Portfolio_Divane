import { personalInfo } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <a href="https://github.com/daryldjeugang" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Construit avec{' '}
          <i className="fas fa-heart" style={{ color: 'var(--accent)', fontSize: '0.8rem' }} />.
        </p>
      </div>
    </footer>
  )
}
