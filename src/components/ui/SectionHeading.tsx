import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  text?: string
}

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow eyebrow--center">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </Reveal>
  )
}
