import { useLanguage } from '../../context/LanguageContext'

export function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage()
  const label = lang === 'fr' ? t.a11y.switchToEnglish : t.a11y.switchToFrench

  return (
    <button type="button" className="lang-toggle" onClick={toggleLang} aria-label={label} title={label}>
      <span className={lang === 'fr' ? 'is-active' : ''}>FR</span>
      <span className="lang-toggle__sep" aria-hidden="true">/</span>
      <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  )
}
