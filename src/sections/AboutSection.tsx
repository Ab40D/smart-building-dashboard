import { profile } from '../data/profile'
import { SectionHeader } from '../components/SectionHeader'
import {
  IconChip,
  IconBuilding,
  IconCpu,
  IconWifi,
  IconLayers,
  IconCode,
  IconArrowDown,
} from '../components/icons'

const pillars = [
  { icon: IconChip, label: 'Electronics' },
  { icon: IconBuilding, label: 'Building Automation' },
  { icon: IconCpu, label: 'Embedded Systems' },
  { icon: IconWifi, label: 'Industrial IoT' },
  { icon: IconLayers, label: 'Automation Software' },
  { icon: IconCode, label: 'Web & Software' },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24">
      <SectionHeader index="01 / ABOUT" title="Engineer who builds and integrates real systems." />

      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7 space-y-5 text-[15px] leading-[1.7] text-ink-800 max-w-prose2">
          <p>
            I am <span className="font-semibold text-ink-900">Abdelkhalek Mammeri</span>, an
            electronics engineer based in {profile.location}. I work across the full chain of
            smart buildings and industrial IoT — from sensor selection and microcontrollers, to
            communication protocols, automation platforms and the dashboards people actually use.
          </p>
          <p>{profile.summary.intro}</p>
          <p>{profile.summary.profile}</p>
          <p className="text-muted">{profile.summary.closing}</p>

          <div className="pt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider2 text-accent hover:text-accent-600"
            >
              See selected projects
              <IconArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="border border-paper-200 bg-paper-50 p-6">
            <p className="h-eyebrow">Professional profile</p>
            <p className="mt-3 text-[13px] text-ink-800 leading-[1.65]">
              My work sits at the intersection of six engineering domains. Together they let me
              take a system from idea to a working, integrated deployment.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-px bg-paper-200">
              {pillars.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 bg-white px-3 py-2.5">
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="text-[12px] font-medium text-ink-900">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-px bg-paper-200 border border-paper-200">
            <div className="bg-white px-4 py-4">
              <div className="font-display text-2xl font-bold text-ink-900">19.5/20</div>
              <div className="h-eyebrow mt-1">Final-year project</div>
            </div>
            <div className="bg-white px-4 py-4">
              <div className="font-display text-2xl font-bold text-ink-900">8+</div>
              <div className="h-eyebrow mt-1">Public projects on GitHub</div>
            </div>
            <div className="bg-white px-4 py-4">
              <div className="font-display text-2xl font-bold text-ink-900">2026</div>
              <div className="h-eyebrow mt-1">Graduation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
