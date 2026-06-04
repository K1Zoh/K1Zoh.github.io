import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { personal } from '../../i18n/content'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LanguageToggle } from '../ui/LanguageToggle'

const SECTION_IDS = ['focus', 'formation', 'experience', 'skills', 'projects', 'contact'] as const

export function Nav() {
  const { t } = useLanguage()
  const activeId = useScrollSpy(SECTION_IDS)
  const [open, setOpen] = useState(false)

  const links = [
    { id: 'formation', label: t.nav.formation },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ]

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)
  const handlePrint = () => {
    close()
    window.print()
  }

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="brand" href="#top" aria-label={t.a11y.brandHome} onClick={close}>
          <span className="brand__mark" aria-hidden="true">
            {personal.initials}
          </span>
          <span className="brand__text">
            <strong>{personal.name}</strong>
            <small>Cyber Cloud · {personal.alias}</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? 'is-active' : ''}
              aria-current={activeId === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <LanguageToggle />
          <ThemeToggle />
          <button type="button" className="btn btn--primary nav__cv" onClick={handlePrint}>
            <Download size={15} />
            {t.actions.downloadCv}
          </button>
          <button
            type="button"
            className="icon-btn nav__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeId === link.id ? 'is-active' : ''}
            onClick={close}
          >
            {link.label}
          </a>
        ))}
        <button type="button" className="btn btn--primary" onClick={handlePrint}>
          <Download size={16} />
          {t.actions.downloadCv}
        </button>
      </div>
    </header>
  )
}
