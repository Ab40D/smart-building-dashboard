import { certifications } from '../data/certifications'
import { languages } from '../data/languages'
import { SectionHeader } from '../components/SectionHeader'
import { IconCheck } from '../components/icons'

function kindLabel(kind: 'certification' | 'course' | 'training') {
  if (kind === 'certification') return 'Certification'
  if (kind === 'course') return 'Course'
  return 'Training'
}

export function CertificationsSection() {
  return (
    <section
      id="certs"
      className="scroll-mt-20 py-16 md:py-24 border-t border-paper-200"
    >
      <SectionHeader
        index="07 / CERTIFICATIONS"
        title="Certifications, courses & languages."
        kicker="Completed · Ongoing"
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="h-eyebrow">Certifications &amp; training</p>
          <ul className="mt-4 divide-y divide-paper-200 border-y border-paper-200">
            {certifications.map((c, i) => (
              <li key={i} className="grid grid-cols-12 items-center gap-3 py-4">
                <div className="col-span-12 md:col-span-7 flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center border border-accent text-accent">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <div>
                    <p className="font-medium text-ink-900 text-[15px] leading-snug">{c.name}</p>
                    <p className="text-[12px] text-muted mt-0.5">{c.issuer}</p>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-3">
                  <span
                    className={
                      c.kind === 'certification'
                        ? 'tag-accent'
                        : c.kind === 'course'
                          ? 'tag'
                          : 'tag'
                    }
                  >
                    {kindLabel(c.kind)}
                  </span>
                </div>
                <div className="col-span-6 md:col-span-2 md:text-right">
                  <span className="text-[12px] font-mono uppercase tracking-wider2 text-muted">
                    {c.status === 'completed' ? 'Completed' : 'Ongoing'}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="h-eyebrow">Languages</p>
          <ul className="mt-4 border border-paper-200">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex items-center justify-between border-b border-paper-200 last:border-b-0 px-4 py-3"
              >
                <span className="font-medium text-ink-900 text-[14px]">{l.name}</span>
                <span className="text-[12px] font-mono uppercase tracking-wider2 text-muted">
                  {l.level}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-3 text-[11px] text-muted leading-relaxed">
            English: actively improving toward C1 through professional documentation,
            certifications (Meta, Google, freeCodeCamp) and technical writing.
          </p>
        </div>
      </div>
    </section>
  )
}
