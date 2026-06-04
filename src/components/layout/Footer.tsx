import { ArrowUp, Mail } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { personal } from '../../i18n/content'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer container">
      <div className="footer__top">
        <a className="brand" href="#top" aria-label={t.a11y.brandHome}>
          <span className="brand__mark" aria-hidden="true">
            {personal.initials}
          </span>
          <span className="brand__text">
            <strong>{personal.name}</strong>
            <small>Cyber Cloud · {personal.alias}</small>
          </span>
        </a>

        <div className="footer__social">
          <a className="icon-btn" href={`mailto:${personal.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
          <a
            className="icon-btn"
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            className="icon-btn"
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a className="icon-btn" href="#top" aria-label={t.actions.backToTop}>
            <ArrowUp size={17} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>
          © {year} {personal.name}. {t.footer.rights}
        </span>
        <span className="footer__built">{t.footer.builtWith}</span>
        <span className="footer__exit mono" aria-hidden="true" title="exit 0 — no errors">
          exit 0
        </span>
      </div>
    </footer>
  )
}
