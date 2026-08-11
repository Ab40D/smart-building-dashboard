import { experiences } from '../data/experience'
import { SectionHeader } from '../components/SectionHeader'
import { IconPin } from '../components/icons'

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-16 md:py-24 border-t border-paper-200">
      <SectionHeader index="02 / EXPERIENCE" title="Where I have worked." kicker="Internship · Industrial" />

      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="grid gap-6 md:grid-cols-12 border-t border-paper-200 pt-8"
          >
            <div className="md:col-span-4">
              <p className="h-eyebrow">{exp.start} — {exp.end}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink-900 leading-tight">
                {exp.company}
              </h3>
              <p className="mt-1 text-[14px] text-ink-700">{exp.role}</p>
              <p className="mt-2 flex items-center gap-1.5 text-[12px] text-muted">
                <IconPin className="h-3.5 w-3.5" />
                {exp.location}
              </p>
              <p className="mt-3 inline-block tag-accent">{exp.type === 'internship' ? 'Internship' : 'Work'}</p>
            </div>

            <ul className="md:col-span-8 space-y-3 text-[14px] leading-[1.7] text-ink-800">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
