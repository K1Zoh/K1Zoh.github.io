import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Cpu,
  GraduationCap,
  Home,
  Languages,
  LockKeyhole,
  Network,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

export type Locale = 'fr' | 'en'

export interface FocusArea {
  icon: LucideIcon
  title: string
  text: string
}

export interface EducationItem {
  icon: LucideIcon
  title: string
  detail: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  impact: string
  bullets: string[]
  tags: string[]
}

export interface SkillGroup {
  icon: LucideIcon
  title: string
  items: string[]
}

export interface Project {
  icon: LucideIcon
  title: string
  status: string
  description: string
  outcome: string
  stack: string[]
}

export interface SectionHeading {
  label: string
  title: string
  text: string
}

export interface Content {
  nav: { formation: string; experience: string; skills: string; projects: string; contact: string }
  actions: {
    contact: string
    downloadCv: string
    viewCv: string
    linkedin: string
    github: string
    backToTop: string
  }
  hero: {
    cvLabel: string
    role: string
    headline: string
    summary: string
    location: string
    availability: string
    terminalCommand: string
    terminalCaption: string
  }
  heroTags: string[]
  focus: SectionHeading & { items: FocusArea[] }
  education: SectionHeading & { items: EducationItem[] }
  experience: SectionHeading & { items: Experience[] }
  skills: SectionHeading & { items: SkillGroup[] }
  projects: SectionHeading & { items: Project[] }
  contact: SectionHeading & { availability: string }
  footer: { rights: string; builtWith: string }
  a11y: {
    themeToLight: string
    themeToDark: string
    switchToEnglish: string
    switchToFrench: string
    openMenu: string
    closeMenu: string
    networkDecoration: string
    brandHome: string
  }
}

/** Identity / contact — identical across locales. */
export const personal = {
  name: 'Matthieu CEIFAO',
  alias: 'KiZoh',
  initials: 'MC',
  email: 'matt.ceifao@hotmail.fr',
  linkedin: 'https://linkedin.com/in/matthieu-ceifao',
  github: 'https://github.com/K1Zoh',
} as const

const fr: Content = {
  nav: {
    formation: 'Formation',
    experience: 'Expériences',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
  },
  actions: {
    contact: 'Contacter',
    downloadCv: 'Télécharger le CV',
    viewCv: 'Voir le parcours',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    backToTop: 'Haut de page',
  },
  hero: {
    cvLabel: 'Disponible · CDI Cyber Cloud · septembre 2026',
    role: 'Ingénieur Cybersécurité Cloud, junior BAC+5',
    headline: 'Gouvernance Azure, sécurité M365, réseau multisite. Et une couche IA qui tourne en local.',
    summary:
      "Deux ans de terrain en cyber cloud. Gouvernance Azure mondiale à grande échelle, sécurité Microsoft 365 pour plusieurs centaines d’utilisateurs, réseau multisite refait, workflows IA local-first.",
    location: 'Île-de-France · mobile Bordeaux, Poitiers, Orléans, Niort',
    availability: 'Disponible début septembre 2026',
    terminalCommand: "cat matthieu.json | jq 'del(.boring_profiles)'",
    terminalCaption: 'k1zoh@azure ~ $',
  },
  heroTags: [
    'Azure Security',
    'Microsoft 365',
    'Entra ID / IAM',
    'Cloud Governance',
    'Python / PowerShell',
    'IA locale & agents',
  ],
  focus: {
    label: 'Domaines',
    title: 'Cloud, identité, réseau, IA. Quatre domaines avec de vraies preuves terrain.',
    text: 'Pas de bullet-point théorique. Chaque domaine est couvert par une alternance ou un projet en production.',
    items: [
      {
        icon: ShieldCheck,
        title: 'Cloud Security',
        text: "Azure Policy, Wiz IaC, Rego, CSPM, revue d'architectures et posture cloud.",
      },
      {
        icon: LockKeyhole,
        title: 'Microsoft 365 / IAM',
        text: 'Entra ID, Conditional Access, MFA, Intune, Defender, migration de tenant.',
      },
      {
        icon: Network,
        title: 'Infra sécurité',
        text: 'Réseau multisite, firewalls Meraki, tunnels IPsec, VPN client-to-site, DNS.',
      },
      {
        icon: BrainCircuit,
        title: 'IA & automatisation',
        text: 'Agents Hermes, MCP, Claude Code, scripts Python/PowerShell, workflows local-first.',
      },
    ],
  },
  education: {
    label: 'Formation',
    title: 'BAC+5 cybersécurité en cours. Socle systèmes et réseaux solide derrière.',
    text: "Master Expert en Cybersécurité (UTT, en cours), bachelor systèmes et réseaux, TOEIC 820.",
    items: [
      {
        icon: GraduationCap,
        title: 'Master Expert en Cybersécurité',
        detail: 'BAC+5 · UTT · en cours · trajectoire CDI cyber cloud septembre 2026',
      },
      {
        icon: GraduationCap,
        title: 'Bachelor Systèmes, Réseaux & Sécurité',
        detail: 'BAC+4 · systèmes, réseaux, sécurité, administration et infrastructure',
      },
      {
        icon: GraduationCap,
        title: 'BTS Systèmes et Réseaux',
        detail: 'BAC+2 · administration systèmes, réseaux et infrastructure',
      },
      {
        icon: Languages,
        title: 'Langues',
        detail: 'Français natif · Anglais TOEIC 820 (B2/B2+) · Portugais B1',
      },
    ],
  },
  experience: {
    label: 'Expérience terrain',
    title: 'Trois alternances en deux ans. À chaque fois : auditer, sécuriser, documenter, passer la main.',
    text: 'Environnements cloud mondiaux, PME multisite, startup deeptech. Présenté par impact réel.',
    items: [
      {
        company: 'Saint-Gobain',
        role: 'Ingénieur Cybersécurité Cloud',
        period: '09/2025 · présent',
        location: 'La Défense · Alternance',
        impact: 'Gouvernance Azure sur un vaste périmètre cloud mondial (large parc de souscriptions).',
        bullets: [
          'Déploiement de contrôles de conformité Azure Policy (JSON) et Rego / IaC.',
          'Automatisation Python pour le suivi de la posture de sécurité cloud (CSPM).',
          "Revue d'architectures Azure : IAM, segmentation, réseau, conformité interne.",
          'Validation de flux réseau et services Azure pour projets cloud internes.',
        ],
        tags: ['Azure', 'Azure Policy', 'Wiz', 'Rego', 'IAM', 'Python', 'CSPM'],
      },
      {
        company: 'Transpa',
        role: 'Administrateur Systèmes, Réseaux & Sécurité',
        period: '10/2024 · 08/2025',
        location: 'Gennevilliers · Alternance',
        impact: 'Sécurisation Microsoft 365 pour plusieurs centaines d’utilisateurs et refonte réseau multisite.',
        bullets: [
          "Audit SI complet puis définition d'une roadmap de remédiation.",
          'Déploiement M365 : Conditional Access, MFA, Intune, Defender, conformité.',
          'Migration tenant-to-tenant : Exchange, SharePoint, Entra ID, DNS.',
          'Refonte multisite : Cisco Meraki, tunnels IPsec, AnyConnect vMX.',
        ],
        tags: ['M365', 'Entra ID', 'Intune', 'Defender', 'Meraki', 'IPsec', 'DNS'],
      },
      {
        company: 'Pasqal',
        role: 'Technicien Informatique N1 à N3',
        period: '08/2023 · 09/2024',
        location: 'Massy · Alternance',
        impact: 'Support autonome et gestion d’un parc multi-OS de plusieurs centaines de postes.',
        bullets: [
          'Support N1 à N3 sans escalade externe.',
          'Automatisation des déploiements et standardisation du matériel.',
          'Gestion MDM Intune/Mosyle, GitLab, Slack, xWiki.',
          'Supervision des sauvegardes Synology et Nextcloud.',
        ],
        tags: ['Support N1-N3', 'Intune', 'Mosyle', 'GitLab', 'Synology', 'Linux', 'macOS'],
      },
    ],
  },
  skills: {
    label: 'Compétences',
    title: 'Cyber cloud, Microsoft 365, réseau. Avec une couche IA assumée.',
    text: 'Compétences réalistes et orientées preuves. Socle infra/sécurité solide, scripts, outils cloud et agents IA local-first.',
    items: [
      {
        icon: BrainCircuit,
        title: 'Automatisation & IA',
        items: ['Hermes Agents', 'MCP', 'Claude Code', 'Ollama', 'LLM local', 'Agentic workflows', 'Prompt engineering', 'Python', 'REST APIs'],
      },
      {
        icon: ShieldCheck,
        title: 'Sécurité & conformité',
        items: ['Entra ID', 'Conditional Access', 'MFA', 'Defender', 'Wiz', 'Rego', 'Azure Policy', 'IAM', 'Hardening'],
      },
      {
        icon: CloudCog,
        title: 'Cloud & Microsoft 365',
        items: ['Microsoft Azure', 'Azure Networking', 'Azure Security', 'M365', 'Intune', 'Exchange Online', 'Autopilot', 'AWS (notions)'],
      },
      {
        icon: Network,
        title: 'Systèmes & réseaux',
        items: ['Windows', 'Linux', 'macOS', 'AD DS', 'DNS', 'DHCP', 'Cisco Meraki', 'IPsec', 'AnyConnect', 'Proxmox'],
      },
      {
        icon: Code2,
        title: 'Scripting & outillage',
        items: ['PowerShell', 'Bash', 'YAML', 'GitLab', 'GLPI', 'Zendesk', 'Synology', 'Docker', 'Documentation'],
      },
    ],
  },
  projects: {
    label: 'Projets & preuves',
    title: 'Des preuves techniques, sans exposer ce qui doit rester privé.',
    text: 'Pas de faux repo vitrine : des projets assumés qui montrent la démarche, les stacks et les problèmes résolus.',
    items: [
      {
        icon: Home,
        title: 'Homelab Tailscale / AdGuard',
        status: 'Infra personnelle · en production',
        description:
          'Raspberry Pi 5, Synology, Tailscale (exit node), DNS filtré AdGuard Home et architecture réseau orientée accès distant sécurisé.',
        outcome: "Preuve : VPN mesh, DNS, NAS, segmentation d'usage et sécurité réseau de bout en bout.",
        stack: ['Raspberry Pi', 'Tailscale', 'AdGuard Home', 'Synology', 'VPN', 'DNS'],
      },
      {
        icon: BriefcaseBusiness,
        title: 'Matt Coaching',
        status: 'Produit privé · full-stack',
        description:
          'Application de coaching sportif React/Supabase : suivi, profils, contenus et workflows coach/athlètes.',
        outcome: 'Preuve : produit web complet, auth, base de données, RLS, composants React et logique métier réelle.',
        stack: ['React', 'TypeScript', 'Supabase', 'Auth', 'RLS', 'Product'],
      },
      {
        icon: Bot,
        title: 'Workflows IA locaux & MCP',
        status: 'Automatisation privée · local-first',
        description:
          "Orchestration d'agents IA (Hermes, skills, cron, MCP 21st.dev) et assistants de code pour accélérer veille, documentation et delivery.",
        outcome: "Preuve : usage avancé d'outils IA sans exposer de données sensibles, automatisations vérifiées.",
        stack: ['Hermes', 'MCP', 'Claude Code', 'Ollama', 'Python', 'Local-first'],
      },
      {
        icon: Cpu,
        title: 'Ce portfolio',
        status: 'Projet public · vitrine technique',
        description:
          'CV web pensé comme preuve de maîtrise front-end : design system, animations, accessibilité et publication GitHub Pages.',
        outcome: 'Preuve : React, TypeScript, design tokens, animations, i18n et CI GitHub Pages.',
        stack: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Design tokens'],
      },
    ],
  },
  contact: {
    label: 'Contact recruteur',
    title: "Besoin d'un profil junior cyber cloud qui met déjà les mains dans le système ?",
    text: 'Disponible pour un CDI en cybersécurité cloud, Azure Security, Microsoft 365 Security, IAM ou cloud governance.',
    availability: 'Disponible début septembre 2026 · réponse rapide',
  },
  footer: {
    rights: 'Tous droits réservés.',
    builtWith: 'React · TypeScript · Framer Motion · Claude Code.',
  },
  a11y: {
    themeToLight: 'Passer en thème clair',
    themeToDark: 'Passer en thème sombre',
    switchToEnglish: 'Switch to English',
    switchToFrench: 'Passer en français',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    networkDecoration: "Visualisation décorative d'un réseau de nœuds interconnectés",
    brandHome: 'Retour en haut de page',
  },
}

const en: Content = {
  nav: {
    formation: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  actions: {
    contact: 'Get in touch',
    downloadCv: 'Download CV',
    viewCv: 'View background',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    backToTop: 'Back to top',
  },
  hero: {
    cvLabel: 'Available · Permanent · Cyber Cloud · September 2026',
    role: 'Cloud Cybersecurity Engineer, junior, MSc level',
    headline: 'Azure governance at scale. M365 hardening. Multi-site networking. Local-first AI. All with real proof.',
    summary:
      'Two years of hands-on field experience. Azure governance at large scale, Microsoft 365 secured for several hundred users, multi-site network rebuilt from scratch, local-first AI workflows.',
    location: 'Île-de-France, France · open to Bordeaux, Poitiers, Orléans, Niort',
    availability: 'Available from September 2026',
    terminalCommand: "cat matthieu.json | jq 'del(.boring_profiles)'",
    terminalCaption: 'k1zoh@azure ~ $',
  },
  heroTags: [
    'Azure Security',
    'Microsoft 365',
    'Entra ID / IAM',
    'Cloud Governance',
    'Python / PowerShell',
    'Local AI & agents',
  ],
  focus: {
    label: 'Focus areas',
    title: 'Cloud, identity, networking, AI. Four domains backed by real field work.',
    text: 'No theoretical bullet points. Each domain is covered by an apprenticeship or a running project.',
    items: [
      {
        icon: ShieldCheck,
        title: 'Cloud Security',
        text: 'Azure Policy, Wiz IaC, Rego, CSPM, architecture reviews and cloud posture.',
      },
      {
        icon: LockKeyhole,
        title: 'Microsoft 365 / IAM',
        text: 'Entra ID, Conditional Access, MFA, Intune, Defender, tenant migration.',
      },
      {
        icon: Network,
        title: 'Security infra',
        text: 'Multi-site networking, Meraki firewalls, IPsec tunnels, client-to-site VPN, DNS.',
      },
      {
        icon: BrainCircuit,
        title: 'AI & automation',
        text: 'Hermes agents, MCP, Claude Code, Python/PowerShell scripting, local-first workflows.',
      },
    ],
  },
  education: {
    label: 'Education',
    title: 'MSc Cybersecurity in progress. Solid systems and networks foundation underneath.',
    text: 'Cybersecurity Expert MSc at UTT, BSc in systems/networks/security, TOEIC 820.',
    items: [
      {
        icon: GraduationCap,
        title: 'MSc Cybersecurity Expert',
        detail: 'MSc level · UTT · in progress · cyber cloud track, September 2026',
      },
      {
        icon: GraduationCap,
        title: 'BSc Systems, Networks & Security',
        detail: 'BSc level · systems, networks, security, administration & infrastructure',
      },
      {
        icon: GraduationCap,
        title: 'BTS Systems & Networks',
        detail: 'BAC+2 diploma · systems, networks & infrastructure administration',
      },
      {
        icon: Languages,
        title: 'Languages',
        detail: 'French native · English TOEIC 820 (B2/B2+) · Portuguese B1',
      },
    ],
  },
  experience: {
    label: 'Field experience',
    title: 'Three apprenticeships in two years. Each time: audit, harden, document, hand off.',
    text: 'Global cloud environments, multi-site SMB, deep-tech startup. Presented by measurable impact.',
    items: [
      {
        company: 'Saint-Gobain',
        role: 'Cloud Cybersecurity Engineer',
        period: '09/2025 · present',
        location: 'La Défense · Apprenticeship',
        impact: 'Azure governance across a large global cloud estate (extensive subscription footprint).',
        bullets: [
          'Shipped Azure Policy (JSON) and Rego / IaC compliance controls.',
          'Python automation for cloud security posture tracking (CSPM).',
          'Azure architecture reviews: IAM, segmentation, networking, internal compliance.',
          'Validation of network flows and Azure services for internal cloud projects.',
        ],
        tags: ['Azure', 'Azure Policy', 'Wiz', 'Rego', 'IAM', 'Python', 'CSPM'],
      },
      {
        company: 'Transpa',
        role: 'Systems, Networks & Security Administrator',
        period: '10/2024 · 08/2025',
        location: 'Gennevilliers · Apprenticeship',
        impact: 'Microsoft 365 hardening for several hundred users and a multi-site network overhaul.',
        bullets: [
          'Full IT audit, then a prioritised remediation roadmap.',
          'M365 rollout: Conditional Access, MFA, Intune, Defender, compliance.',
          'Tenant-to-tenant migration: Exchange, SharePoint, Entra ID, DNS.',
          'Multi-site rebuild: Cisco Meraki, IPsec tunnels, AnyConnect vMX.',
        ],
        tags: ['M365', 'Entra ID', 'Intune', 'Defender', 'Meraki', 'IPsec', 'DNS'],
      },
      {
        company: 'Pasqal',
        role: 'IT Technician · L1 to L3',
        period: '08/2023 · 09/2024',
        location: 'Massy · Apprenticeship',
        impact: 'Autonomous support and management of a multi-OS fleet of several hundred machines.',
        bullets: [
          'L1 to L3 support with no external escalation.',
          'Deployment automation and hardware standardisation.',
          'MDM with Intune/Mosyle, GitLab, Slack, xWiki.',
          'Supervision of Synology and Nextcloud backups.',
        ],
        tags: ['L1-L3 support', 'Intune', 'Mosyle', 'GitLab', 'Synology', 'Linux', 'macOS'],
      },
    ],
  },
  skills: {
    label: 'Skills',
    title: 'Cyber cloud, Microsoft 365, networking. With an owned AI layer.',
    text: 'Realistic, proof-driven skills. Solid infra/security base, scripting, cloud tooling and local-first AI agents.',
    items: [
      {
        icon: BrainCircuit,
        title: 'Automation & AI',
        items: ['Hermes Agents', 'MCP', 'Claude Code', 'Ollama', 'Local LLM', 'Agentic workflows', 'Prompt engineering', 'Python', 'REST APIs'],
      },
      {
        icon: ShieldCheck,
        title: 'Security & compliance',
        items: ['Entra ID', 'Conditional Access', 'MFA', 'Defender', 'Wiz', 'Rego', 'Azure Policy', 'IAM', 'Hardening'],
      },
      {
        icon: CloudCog,
        title: 'Cloud & Microsoft 365',
        items: ['Microsoft Azure', 'Azure Networking', 'Azure Security', 'M365', 'Intune', 'Exchange Online', 'Autopilot', 'AWS (basics)'],
      },
      {
        icon: Network,
        title: 'Systems & networks',
        items: ['Windows', 'Linux', 'macOS', 'AD DS', 'DNS', 'DHCP', 'Cisco Meraki', 'IPsec', 'AnyConnect', 'Proxmox'],
      },
      {
        icon: Code2,
        title: 'Scripting & tooling',
        items: ['PowerShell', 'Bash', 'YAML', 'GitLab', 'GLPI', 'Zendesk', 'Synology', 'Docker', 'Documentation'],
      },
    ],
  },
  projects: {
    label: 'Projects & proof',
    title: 'Technical proof, without exposing what must stay private.',
    text: 'No fake showcase repos: owned projects that show the approach, the stacks and the problems solved.',
    items: [
      {
        icon: Home,
        title: 'Tailscale / AdGuard homelab',
        status: 'Personal infra · in production',
        description:
          'Raspberry Pi 5, Synology, Tailscale (exit node), AdGuard Home filtered DNS and a network built for secure remote access.',
        outcome: 'Proof: mesh VPN, DNS, NAS, usage segmentation and end-to-end network security thinking.',
        stack: ['Raspberry Pi', 'Tailscale', 'AdGuard Home', 'Synology', 'VPN', 'DNS'],
      },
      {
        icon: BriefcaseBusiness,
        title: 'Matt Coaching',
        status: 'Private product · full-stack',
        description:
          'A React/Supabase sports-coaching app: tracking, profiles, content and coach/athlete workflows.',
        outcome: 'Proof: a complete web product, with auth, database, RLS, React components and real business logic.',
        stack: ['React', 'TypeScript', 'Supabase', 'Auth', 'RLS', 'Product'],
      },
      {
        icon: Bot,
        title: 'Local AI workflows & MCP',
        status: 'Private automation · local-first',
        description:
          'Orchestrating AI agents (Hermes, skills, cron, 21st.dev MCP) and code assistants to speed up research, docs and delivery.',
        outcome: 'Proof: advanced AI tooling without exposing sensitive data, with verified automations.',
        stack: ['Hermes', 'MCP', 'Claude Code', 'Ollama', 'Python', 'Local-first'],
      },
      {
        icon: Cpu,
        title: 'This portfolio',
        status: 'Public project · technical showcase',
        description:
          'A web CV built as front-end proof: design system, animations, accessibility and GitHub Pages delivery.',
        outcome: 'Proof: React, TypeScript, design tokens, animations, i18n and a GitHub Pages CI.',
        stack: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Design tokens'],
      },
    ],
  },
  contact: {
    label: 'For recruiters',
    title: 'Looking for a junior cyber cloud profile who already gets hands-on?',
    text: 'Open to a permanent role in cloud cybersecurity, Azure Security, Microsoft 365 Security, IAM or cloud governance.',
    availability: 'Available from September 2026 · quick to reply',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'React · TypeScript · Framer Motion · Claude Code.',
  },
  a11y: {
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    switchToEnglish: 'Switch to English',
    switchToFrench: 'Switch to French',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    networkDecoration: 'Decorative visualization of an interconnected node network',
    brandHome: 'Back to top of page',
  },
}

export const content: Record<Locale, Content> = { fr, en }
