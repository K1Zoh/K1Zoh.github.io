import { useLanguage } from '../../context/LanguageContext'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'
import { TechMarquee } from '../ui/TechMarquee'

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow={t.skills.label} title={t.skills.title} text={t.skills.text} />
        <div className="skills-grid">
          {t.skills.items.map((group, index) => {
            const Icon = group.icon
            return (
              <Card key={group.title} delay={index * 0.05} className="skill-card">
                <div className="skill-card__head">
                  <span className="card-icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
        <TechMarquee />
      </div>
    </section>
  )
}
