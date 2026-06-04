import { useLanguage } from '../../context/LanguageContext'
import { Card } from '../ui/Card'

export function FocusAreas() {
  const { t } = useLanguage()

  return (
    <section id="focus" className="section section--tight">
      <div className="container">
        <div className="focus-grid">
          {t.focus.items.map((area, index) => {
            const Icon = area.icon
            return (
              <Card key={area.title} delay={index * 0.06} className="focus-card">
                <span className="card-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
