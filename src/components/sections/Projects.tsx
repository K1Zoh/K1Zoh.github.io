import { useLanguage } from '../../context/LanguageContext'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow={t.projects.label} title={t.projects.title} text={t.projects.text} />
        <div className="project-grid">
          {t.projects.items.map((project, index) => {
            const Icon = project.icon
            return (
              <Card key={project.title} delay={index * 0.05} className="project-card">
                <div className="project-card__top">
                  <span className="card-icon card-icon--lg">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="project-card__status">{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-card__outcome">{project.outcome}</p>
                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
