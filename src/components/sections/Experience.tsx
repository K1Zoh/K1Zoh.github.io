import { useLanguage } from '../../context/LanguageContext'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={t.experience.label}
          title={t.experience.title}
          text={t.experience.text}
        />
        <ol className="timeline">
          {t.experience.items.map((xp, index) => (
            <li key={xp.company} className="timeline__item">
              <span className="timeline__node" aria-hidden="true" />
              <Card delay={index * 0.05} className="experience-card">
                <div className="experience-card__head">
                  <span className="experience-card__period mono">{xp.period}</span>
                  <h3>{xp.role}</h3>
                  <p className="experience-card__company">
                    {xp.company} · {xp.location}
                  </p>
                </div>
                <p className="experience-card__impact">{xp.impact}</p>
                <ul className="experience-card__bullets">
                  {xp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {xp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
