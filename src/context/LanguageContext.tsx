/* eslint-disable react-refresh/only-export-components -- provider + hook colocated by design */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { content, type Content, type Locale } from '../i18n/content'

interface LanguageContextValue {
  lang: Locale
  t: Content
  toggleLang: () => void
  setLang: (lang: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLang(): Locale {
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    /* storage unavailable */
  }
  if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('en')) {
    return 'en'
  }
  return 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage unavailable — non blocking */
    }
  }, [lang])

  const setLang = useCallback((next: Locale) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'fr' ? 'en' : 'fr')),
    [],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: content[lang], toggleLang, setLang }),
    [lang, toggleLang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
