import { useLanguage } from '../../context/LanguageContext'
import { personal } from '../../i18n/content'

interface SysRow {
  key: string
  val: string
  bar?: number   /* 0–100 */
  accent?: boolean
}

export function SystemCard() {
  const { lang } = useLanguage()

  const rows: SysRow[] = lang === 'fr'
    ? [
        { key: 'role',   val: 'Cloud Security Engineer', accent: true },
        { key: 'level',  val: 'BAC+5 · MSc (UTT)' },
        { key: 'azure',  val: 'gouvernance mondiale', bar: 92 },
        { key: 'm365',   val: 'sécurité multi-users', bar: 72 },
        { key: 'sites',  val: 'réseau multisite', bar: 48 },
        { key: 'ai',     val: '3+ projets MCP / LLM', bar: 36 },
        { key: 'shell',  val: 'zsh · pwsh · python' },
        { key: 'status', val: 'disponible sept 2026', accent: true },
      ]
    : [
        { key: 'role',   val: 'Cloud Security Engineer', accent: true },
        { key: 'level',  val: 'MSc · BAC+5 (UTT)' },
        { key: 'azure',  val: 'global governance', bar: 92 },
        { key: 'm365',   val: 'multi-user hardening', bar: 72 },
        { key: 'sites',  val: 'multi-site network', bar: 48 },
        { key: 'ai',     val: '3+ MCP / LLM projects', bar: 36 },
        { key: 'shell',  val: 'zsh · pwsh · python' },
        { key: 'status', val: 'available sept 2026', accent: true },
      ]

  return (
    <div className="system-card card" role="region" aria-label="System info">
      <div className="system-card__header mono">
        <span className="system-card__user">{personal.alias.toLowerCase()}@k1zoh</span>
        <span className="system-card__sep" aria-hidden="true"> ~ $ neofetch</span>
      </div>
      <div className="system-card__divider" aria-hidden="true" />
      <dl className="system-card__rows">
        {rows.map((row) => (
          <div key={row.key} className={`system-card__row${row.accent ? ' system-card__row--accent' : ''}`}>
            <dt className="system-card__key mono">{row.key}</dt>
            <dd className="system-card__val">
              {row.bar !== undefined ? (
                <span className="system-card__bar-wrap">
                  <span className="system-card__bar-text">{row.val}</span>
                  <span
                    className="system-card__bar"
                    role="meter"
                    aria-valuenow={row.bar}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="system-card__bar-fill" style={{ width: `${row.bar}%` }} />
                  </span>
                </span>
              ) : (
                row.val
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
