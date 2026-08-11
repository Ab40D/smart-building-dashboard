import { education } from '../data/education'
import { SectionHeader } from '../components/SectionHeader'
import { IconPin } from '../components/icons'

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 py-16 md:py-24 border-t border-paper-200">
      <SectionHeader index="03 / EDUCATION" title="Academic background." kicker="Licence · Engineering" />

      <div className="space-y-10">
        {education.map((edu, idx) => (
          <article
            key={idx}
            className="grid gap-6 md:grid-cols-12 border-t border-paper-200 pt-8"
          >
            <div className="md:col-span-4">
              <p className="h-eyebrow">{edu.start} — {edu.end}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink-900 leading-tight">
                {edu.degree}
              </h3>
              <p className="mt-1 text-[14px] text-ink-700">{edu.specialization}</p>
              <p className="mt-2 flex items-center gap-1.5 text-[12px] text-muted">
                <IconPin className="h-3.5 w-3.5" />
                {edu.institution} · {edu.location}
              </p>
            </div>

            <div className="md:col-span-8 space-y-4 text-[14px] leading-[1.7] text-ink-800">
              {edu.finalProject && (
                <div className="border-l-2 border-accent pl-4">
                  <p className="h-eyebrow">Final-year project</p>
                  <p className="mt-1 font-semibold text-ink-900">{edu.finalProject.title}</p>
                  <p className="mt-2 text-ink-700">{edu.finalProject.description}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider2">
                    <span className="text-muted">Grade</span>
                    <span className="bg-ink-900 px-2 py-0.5 text-white">
                      {edu.finalProject.grade}
                    </span>
                  </p>
                </div>
              )}
              {edu.notes?.map((n, i) => (
                <p key={i} className="text-ink-700">{n}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
