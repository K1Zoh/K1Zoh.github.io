import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { Background } from './components/layout/Background'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/hero/Hero'
import { FocusAreas } from './components/sections/FocusAreas'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { KonamiCode } from './components/ui/KonamiCode'

function Portfolio() {
  const { lang } = useLanguage()
  const skipLabel = lang === 'fr' ? 'Aller au contenu' : 'Skip to content'

  return (
    <>
      <a className="skip-link" href="#main">
        {skipLabel}
      </a>
      <ScrollProgress />
      <Background />
      <Nav />
      <main id="main">
        <Hero />
        <FocusAreas />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <KonamiCode lang={lang} />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Portfolio />
      </LanguageProvider>
    </ThemeProvider>
  )
}
