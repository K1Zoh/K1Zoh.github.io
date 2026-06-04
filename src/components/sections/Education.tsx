import { useLanguage } from '../../context/LanguageContext'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  const { t, lang } = useLanguage()
  const featuredBadge = lang === 'fr' ? 'BAC+5' : 'MSc'

  return (
    <section id="formation" className="section">
      <div className="container">
        <SectionHeading eyebrow={t.education.label} title={t.education.title} text={t.education.text} />
        <div className="education-grid">
          {t.education.items.map((item, index) => {
            const Icon = item.icon
            const featured = index === 0
            return (
              <Card
                key={item.title}
                delay={index * 0.06}
                className={`education-card ${featured ? 'education-card--featured' : ''}`}
              >
                {featured ? <span className="education-card__badge">{featuredBadge}</span> : null}
                <span className="card-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
