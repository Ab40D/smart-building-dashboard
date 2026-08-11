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
    <section id="about" className="scroll-mt-20 py-16 md:py-24 border-t border-paper-200">
      <SectionHeader index="01 / ABOUT" title="Who I am and what I build." kicker="Personal · Engineering" />

      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7 space-y-5 text-[15px] leading-[1.7] text-ink-800 max-w-prose2">
          <p>
            I am <span className="font-semibold text-ink-900">Abdelkhalek Mammeri</span>, an
            electronics engineer based in {profile.location}. My work is about{' '}
            <span className="font-semibold text-ink-900">integration</span> — making sensors,
            microcontrollers, field-bus devices, automation platforms and user interfaces
            behave like one system.
          </p>
          <p>{profile.summary.intro}</p>
          <p>{profile.summary.profile}</p>
          <p className="text-muted">{profile.summary.closing}</p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider2 text-accent hover:text-accent-600"
            >
              Jump to projects
              <IconArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5 space-y-6">
          <div className="border border-paper-200 bg-paper-50 p-6">
            <p className="h-eyebrow">Professional profile</p>
            <p className="mt-3 text-[13px] text-ink-800 leading-[1.65]">
              Six engineering domains, working together. They let me take a system from idea to
              a real, integrated deployment.
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

          <div className="border border-paper-200 p-6">
            <p className="h-eyebrow">About the channel</p>
            <p className="mt-3 text-[13px] leading-[1.65] text-ink-800">
              {profile.youtubeBio}
            </p>
            <a
              href={profile.links.youtube}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider2 text-accent hover:text-accent-600"
            >
              Visit the YouTube channel
              <IconArrowDown className="h-3.5 w-3.5 -rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
