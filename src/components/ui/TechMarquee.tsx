import { useLanguage } from '../../context/LanguageContext'
import azure from '../../assets/logos/azure.svg'
import python from '../../assets/logos/python.svg'
import docker from '../../assets/logos/docker.svg'
import linux from '../../assets/logos/linux.svg'
import gitlab from '../../assets/logos/gitlab.svg'
import typescript from '../../assets/logos/typescript.svg'
import supabase from '../../assets/logos/supabase.svg'

const LOGOS = [
  { src: azure, name: 'Microsoft Azure' },
  { src: python, name: 'Python' },
  { src: docker, name: 'Docker' },
  { src: linux, name: 'Linux' },
  { src: gitlab, name: 'GitLab' },
  { src: typescript, name: 'TypeScript' },
  { src: supabase, name: 'Supabase' },
] as const

export function TechMarquee() {
  const { lang } = useLanguage()
  const caption =
    lang === 'fr' ? 'Technologies manipulées au quotidien' : 'Technologies I work with daily'

  return (
    <div className="tech-strip">
      <span className="tech-strip__caption mono">{caption}</span>
      <ul className="tech-strip__logos">
        {LOGOS.map((logo) => (
          <li key={logo.name}>
            <img src={logo.src} alt={logo.name} title={logo.name} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  )
}
