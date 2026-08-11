import { skillGroups } from '../data/skills'
import { SectionHeader } from '../components/SectionHeader'

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 md:py-24 border-t border-paper-200">
      <SectionHeader
        index="05 / SKILLS"
        title="Technical skills, grouped by domain."
        kicker="Verified · no fake percentages"
      />

      <div className="grid gap-px bg-paper-200 md:grid-cols-2 border border-paper-200">
        {skillGroups.map((g) => (
          <div key={g.domain} className="bg-white p-6">
            <p className="h-eyebrow text-accent">{g.domain}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="inline-flex items-center px-2.5 py-1 text-[12px] border border-paper-200 text-ink-800"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
