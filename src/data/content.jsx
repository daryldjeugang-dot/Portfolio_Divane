export const personalInfo = {
  name: 'Divane Daryl Ndjaga Djeugang',
  nameShort: 'daryl',
  title: 'Étudiant en Cybersécurité, Réseaux & Administration Systèmes',
  subtitle: 'Futur ingénieur en cybersécurité | Passionné de réseaux et de systèmes',
  location: 'Bandjoun, Cameroun',
  email: 'daryldjeugang@gmail.com',
  phone: ['+237 680 29 28 80', '+237 693 36 79 88'],
  github: 'https://github.com/daryldjeugang',
  disponibilite: 'dès août 2026',
  role: 'Stage Cybersécurité / Data',
}

export const aboutText = [
  "Je suis étudiant en Licence Technologique à l'IUT de Bandjoun, passionné par la cybersécurité, les réseaux et l'administration des systèmes. Je développe mes compétences à travers des projets pratiques et des environnements de laboratoire.",
  "Mon parcours m'a permis d'acquérir une base solide en réseaux, systèmes Linux/Windows, sécurité informatique et développement. Je m'intéresse particulièrement à la sécurisation des infrastructures, à l'analyse réseau, à l'administration système et à l'automatisation.",
  "Mon objectif est de continuer à progresser dans le domaine de la cybersécurité et de participer à des projets renforçant la sécurité et la fiabilité des systèmes d'information.",
]

export const skillCategories = [
  {
    icon: 'fa-shield-halved',
    title: 'Cybersécurité',
    items: [
      'Sécurisation des réseaux', 'Filtrage réseau', 'ACL',
      'Pare-feu', 'VPN', 'NAT', 'Analyse du trafic réseau',
      'Surveillance réseau', 'Durcissement des systèmes',
      'Contrôle des accès', 'Protection des données',
      'Wireshark', 'Nmap', 'pfSense', 'Analyse de vulnérabilités',
    ],
  },
  {
    icon: 'fa-network-wired',
    title: 'Réseaux',
    items: [
      'TCP/IP', 'IPv4', 'VLAN', 'Routage', 'DNS', 'DHCP',
      'NAT', 'VPN', 'Pare-feu', 'Haute disponibilité',
      'Câblage réseau', 'Administration réseau', 'Dépannage réseau',
      'HTTP/HTTPS', 'SSH', 'FTP',
      'Cisco Packet Tracer', 'GNS3',
    ],
  },
  {
    icon: 'fa-server',
    title: 'Administration Systèmes',
    items: [
      'Linux (Ubuntu)', 'Kali Linux', 'Administration Linux',
      'Gestion des utilisateurs', 'Gestion des permissions',
      'Gestion des services', 'Configuration réseau',
      'Automatisation', 'Gestion des processus',
      'Windows Server', 'Active Directory',
      'GPO / Politiques de sécurité', 'Administration centralisée',
      'Docker', 'VirtualBox',
    ],
  },
  {
    icon: 'fa-code',
    title: 'Développement',
    items: [
      'Python', "Scripts d'automatisation",
      'Manipulation de données', 'Programmation orientée objet',
      'HTML', 'CSS', 'JavaScript', 'Tailwind CSS',
      'Django', 'Git', 'GitHub', 'API REST', 'SQL',
    ],
  },
  {
    icon: 'fa-database',
    title: 'Données & Blockchain',
    items: [
      'PostgreSQL', 'SQL', 'Création de bases de données',
      'Modélisation de données', 'Pandas', 'Matplotlib',
      'Analyse exploratoire', 'Visualisation de données',
      'Solidité', 'Blockchain', 'Ethereum', 'Sepolia',
      'MetaMask', 'Hardhat', 'IPFS',
    ],
  },
]

export const projects = [
  {
    icon: 'fa-link',
    color: '#7c3aed',
    title: 'DiploChain',
    tech: 'Blockchain · Ethereum · Solidity',
    desc: 'Plateforme de certification et de vérification de diplômes basée sur la blockchain, garantissant l\'authenticité et la traçabilité des certificats.',
    tags: ['Solidity', 'Ethereum', 'Sepolia', 'MetaMask', 'Hardhat', 'IPFS'],
  },
  {
    icon: 'fa-shield',
    color: '#00d4ff',
    title: 'Pare-feu pfSense',
    tech: 'Réseau · Cybersécurité',
    desc: 'Installation et configuration d\'un pare-feu pfSense avec filtrage du trafic, règles de sécurité, NAT et surveillance réseau.',
    tags: ['pfSense', 'Pare-feu', 'NAT', 'Filtrage', 'Surveillance'],
  },
  {
    icon: 'fa-lock',
    color: '#00d4ff',
    title: 'VPN Sécurisé avec pfSense',
    tech: 'Cybersécurité · Réseau',
    desc: 'Mise en place d\'un accès distant sécurisé pour utilisateurs nomades via VPN, avec chiffrement et authentification.',
    tags: ['VPN', 'pfSense', 'Chiffrement', 'Accès distant', 'Sécurité'],
  },
  {
    icon: 'fa-diagram-project',
    color: '#22c55e',
    title: 'Active Directory',
    tech: 'Windows Server · Administration',
    desc: 'Déploiement et configuration d\'Active Directory avec gestion des utilisateurs, groupes, permissions et GPO.',
    tags: ['Windows Server', 'Active Directory', 'GPO', 'Gestion centralisée'],
  },
  {
    icon: 'fa-globe',
    color: '#00d4ff',
    title: 'DNS & DHCP sous Linux',
    tech: 'Linux · Réseau',
    desc: 'Configuration d\'un serveur DNS et DHCP pour automatiser la gestion des adresses IP et la résolution de noms sur un réseau local.',
    tags: ['Linux', 'DNS', 'DHCP', 'Bind', 'ISC DHCP'],
  },
  {
    icon: 'fa-cloud-upload-alt',
    color: '#22c55e',
    title: 'Haute Disponibilité Web',
    tech: 'Systèmes · Réseau',
    desc: 'Architecture de haute disponibilité pour ressources web avec équilibrage de charge et reprise après incident.',
    tags: ['HA', 'Load Balancing', 'Failover', 'Apache', 'Linux'],
  },
  {
    icon: 'fa-code',
    color: '#00d4ff',
    title: 'Développement Web',
    tech: 'Web · Frontend',
    desc: 'Création et intégration de pages web responsives avec HTML, CSS, JavaScript et Tailwind CSS.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
  },
]

export const experiences = [
  {
    date: '2024',
    title: 'Stage — Scène en réseau',
    org: 'CAMTEL · Bafoussam',
    items: [
      'Assistance à la configuration des équipements réseau',
      'Surveillance et suivi des équipements',
      'Participation à la maintenance réseau',
      'Assistance au réseau de connexion',
      'Découverte de l\'infrastructure opérateur',
    ],
  },
  {
    date: '2024',
    title: 'Stage — Développement Web',
    org: 'Worketyamo',
    items: [
      'Développement de pages web responsives',
      'Utilisation de HTML, CSS et JavaScript',
      'Intégration de maquettes',
      'Participation à la maintenance et à l\'amélioration de sites web',
    ],
  },
]

export const education = [
  { year: '2025 – 2026 · En cours', title: 'Licence Technologique', school: 'Qualité, Sécurité Internet & Réseau — IUT de Bandjoun', desc: 'Spécialisation en cybersécurité, administration réseau et sécurité des systèmes d\'information.' },
  { year: '2023 – 2025', title: 'Brevet de Technicien Supérieur (BTS)', school: 'Réseaux et Sécurité — IUES / INSAM, Bafoussam', desc: 'Formation approfondie en réseaux informatiques, sécurité et administration systèmes.' },
  { year: '2023', title: 'Baccalauréat Scientifique — Série C', school: 'Lycée Classique de Bangangté', desc: 'Mention scientifique, spécialité mathématiques et sciences physiques.' },
]

export const interests = [
  'Cybersécurité', 'Réseaux informatiques', 'Linux',
  'Cloud Computing', 'IA / Machine Learning', 'Blockchain',
  'Développement logiciel', 'Veille technologique',
]
