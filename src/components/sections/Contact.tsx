import { ArrowRight, Download, Mail } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { personal } from '../../i18n/content'
import { Reveal } from '../ui/Reveal'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact-card card">
          <span className="eyebrow eyebrow--center">{t.contact.label}</span>
          <h2>{t.contact.title}</h2>
          <p className="contact-card__text">{t.contact.text}</p>
          <p className="contact-availability">
            <span className="pulse-dot" aria-hidden="true" />
            {t.contact.availability}
          </p>

          <div className="contact-actions">
            <a className="btn btn--primary" href={`mailto:${personal.email}`}>
              {t.actions.contact}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <button type="button" className="btn btn--ghost" onClick={() => window.print()}>
              <Download size={16} aria-hidden="true" />
              {t.actions.downloadCv}
            </button>
          </div>

          <div className="contact-links">
            <a href={`mailto:${personal.email}`}>
              <Mail size={16} aria-hidden="true" />
              {personal.email}
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer">
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
