import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, ExternalLink, MapPin, Rocket, ShieldCheck, Terminal } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { personal } from '../../i18n/content'
import { CyberNetwork } from './CyberNetwork'
import { SystemCard } from './SystemCard'

export function Hero() {
  const { t } = useLanguage()
  const reduced = useReducedMotion()
  const { hero } = t

  return (
    <section id="top" className="hero container">
      <motion.div
        className="hero-copy"
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="cv-ribbon" href={`mailto:${personal.email}`}>
          <span className="pulse-dot" aria-hidden="true" />
          {hero.cvLabel}
        </a>

        <p className="hero-role">
          <ShieldCheck size={15} aria-hidden="true" />
          {hero.role}
        </p>

        <h1 className="hero-title">{hero.headline}</h1>
        <p className="hero-summary">{hero.summary}</p>

        <ul className="hero-tags" aria-label="Stack">
          {t.heroTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="hero-meta">
          <span>
            <MapPin size={15} aria-hidden="true" />
            {hero.location}
          </span>
          <span>
            <Rocket size={15} aria-hidden="true" />
            {hero.availability}
          </span>
        </div>

        <div className="hero-actions">
          <a className="btn btn--primary" href={`mailto:${personal.email}`}>
            {t.actions.contact}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <button type="button" className="btn btn--ghost" onClick={() => window.print()}>
            <Download size={16} aria-hidden="true" />
            {t.actions.downloadCv}
          </button>
          <a className="btn btn--ghost" href={personal.linkedin} target="_blank" rel="noreferrer">
            {t.actions.linkedin}
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-viz card">
          <div className="hero-viz__hud">
            <span className="status-dot" aria-hidden="true" />
            {hero.terminalCaption}
          </div>
          <CyberNetwork className="hero-viz__canvas" />
          <div className="hero-viz__terminal mono">
            <Terminal size={13} aria-hidden="true" />
            <span>
              <span className="term-prompt">matthieu@cv</span> ~ {hero.terminalCommand}
            </span>
          </div>
        </div>

        <SystemCard />
      </motion.div>
    </section>
  )
}
