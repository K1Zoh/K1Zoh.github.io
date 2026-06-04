import { useEffect, useRef, useState } from 'react'

const SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

const LINES_FR = [
  '$ sudo hire matthieu',
  '[sudo] mot de passe recruteur : ••••••••••',
  'Connexion à k1zoh@talent-acquisition...',
  'Installation : matthieu-ceifao@2026.09...',
  '[██████████████████████] 100%',
  '',
  '✓ Onboarding réussi.',
  '  Role   : Cloud Security Engineer',
  '  Dispo  : septembre 2026',
  '  Coffee : ☕ × ∞',
  '',
  '// exit 0',
]

const LINES_EN = [
  '$ sudo hire matthieu',
  '[sudo] password for recruiter: ••••••••••',
  'Connecting to k1zoh@talent-acquisition...',
  'Installing: matthieu-ceifao@2026.09...',
  '[██████████████████████] 100%',
  '',
  '✓ Onboarding successful.',
  '  Role   : Cloud Security Engineer',
  '  Avail  : September 2026',
  '  Coffee : ☕ × ∞',
  '',
  '// exit 0',
]

export function KonamiCode({ lang }: { lang: 'fr' | 'en' }) {
  const [active, setActive] = useState(false)
  const progress = useRef<string[]>([])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      progress.current = [...progress.current, e.key].slice(-SEQUENCE.length)
      if (progress.current.join(',') === SEQUENCE.join(',')) {
        setActive(true)
        progress.current = []
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  if (!active) return null

  const lines = lang === 'fr' ? LINES_FR : LINES_EN

  return (
    <div
      className="konami-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Easter egg"
      onClick={() => setActive(false)}
    >
      <div className="konami-terminal mono" onClick={(e) => e.stopPropagation()}>
        <div className="konami-terminal__bar">
          <span className="konami-terminal__dot" aria-hidden="true" />
          <span className="konami-terminal__dot" aria-hidden="true" />
          <span className="konami-terminal__dot" aria-hidden="true" />
          <span className="konami-terminal__title">
            {lang === 'fr' ? 'recruteur@terminal ~ $' : 'recruiter@terminal ~ $'}
          </span>
        </div>
        <div className="konami-terminal__body">
          {lines.map((line, i) => (
            <div
              key={i}
              className="konami-line"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {line || '\u00A0'}
            </div>
          ))}
          <button
            className="konami-close"
            onClick={() => setActive(false)}
            autoFocus
          >
            {lang === 'fr' ? '[ Fermer ]' : '[ Close ]'}
          </button>
        </div>
      </div>
    </div>
  )
}
