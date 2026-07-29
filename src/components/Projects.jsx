import { useInView } from '../hooks/useInView'
import { useTranslation } from '../context/LanguageContext'
import './Projects.css'

const techIcons = [
  { icon: 'fa-code', top: '8%', left: '5%', color: '#00d4ff', delay: '0s' },
  { icon: 'fa-shield-halved', top: '15%', right: '8%', color: '#22c55e', delay: '0.8s' },
  { icon: 'fa-cube', top: '55%', left: '3%', color: '#7c3aed', delay: '1.6s' },
  { icon: 'fa-database', top: '40%', right: '4%', color: '#f59e0b', delay: '1.2s' },
  { icon: 'fa-network-wired', top: '75%', right: '5%', color: '#3b82f6', delay: '0.4s' },
  { icon: 'fa-lock', top: '85%', left: '8%', color: '#ef4444', delay: '2s' },
  { icon: 'fa-server', top: '30%', left: '2%', color: '#ec4899', delay: '0.6s' },
  { icon: 'fa-cloud', top: '65%', left: '4%', color: '#f59e0b', delay: '1.4s' },
]

export default function Projects() {
  const [ref, visible] = useInView()
  const { t } = useTranslation()
  const projects = t('projects.list', { returnObjects: true })

  return (
    <section id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
      {techIcons.map((ti, i) => (
        <i key={i} className={`fas ${ti.icon} projects-float-icon`}
          style={{
            top: ti.top, left: ti.left, right: ti.right,
            color: ti.color, animationDelay: ti.delay,
            position: 'absolute', zIndex: 0, opacity: 0.12, fontSize: '2rem',
          }} />
      ))}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={`section-header ${visible ? 'visible' : ''}`} ref={ref}>
          <div className="label">{t('projects.label')}</div>
          <h2>{t('projects.heading')}</h2>
          <p>{t('projects.subtitle')}</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

const techIconMap = {
  'Solidity': 'fa-cube', 'Ethereum': 'fa-gem', 'Sepolia': 'fa-flask',
  'MetaMask': 'fa-mask', 'Hardhat': 'fa-hard-hat', 'IPFS': 'fa-link',
  'pfSense': 'fa-shield-halved', 'Pare-feu': 'fa-shield', 'Firewall': 'fa-shield',
  'NAT': 'fa-arrows-left-right', 'Filtrage': 'fa-filter', 'Filtering': 'fa-filter',
  'Surveillance': 'fa-eye', 'Monitoring': 'fa-eye',
  'VPN': 'fa-lock', 'Chiffrement': 'fa-key', 'Encryption': 'fa-key',
  'Accès distant': 'fa-wifi', 'Remote Access': 'fa-wifi',
  'Sécurité': 'fa-shield-halved', 'Security': 'fa-shield-halved',
  'Active Directory': 'fa-users-gear', 'Windows Server': 'fa-server',
  'Administration': 'fa-screwdriver-wrench', 'GPO': 'fa-gear', 'Politiques': 'fa-file-shield',
  'Docker': 'fa-cubes', 'VirtualBox': 'fa-cube',
  'Python': 'fa-code', 'Linux': 'fa-terminal', 'Ubuntu': 'fa-terminal',
  'Git': 'fa-code-branch', 'GitHub': 'fa-code-branch',
  'Déploiement': 'fa-cloud-arrow-up', 'Deployment': 'fa-cloud-arrow-up',
  'Automatisation': 'fa-robot', 'Automation': 'fa-robot',
}

function ProjectCard({ project }) {
  const [ref, visible] = useInView()

  return (
    <div className={`project-card ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="icon" style={{ background: `${project.color}20`, color: project.color }}>
        <i className={`fas ${project.icon}`} />
      </div>
      <h4>{project.title}</h4>
      <div className="tech">{project.tech}</div>
      <p>{project.desc}</p>
      <div className="project-tech-icons">
        {project.tags.map((t, i) => {
          const icon = techIconMap[t] || 'fa-microchip'
          return <span key={i} className="tech-icon-bubble" title={t}><i className={`fas ${icon}`} /></span>
        })}
      </div>
      <div className="tags">
        {project.tags.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
