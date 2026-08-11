import { projects, featuredProject } from '../data/projects'
import { SectionHeader } from '../components/SectionHeader'
import { IconExternal, IconGithub, IconArrowRight } from '../components/icons'

function StatusBadge({ status }: { status: 'completed' | 'in-progress' }) {
  return status === 'completed' ? (
    <span className="tag">Completed</span>
  ) : (
    <span className="tag-accent">In progress</span>
  )
}

function ArchitectureFlow() {
  const steps = [
    { title: 'Hardware', sub: 'Sensors · Arduino · ESP32 · KNX actuators' },
    { title: 'Communication', sub: 'KNXnet/IP · MQTT · WebSockets · HTTP/REST' },
    { title: 'Edge / Server', sub: 'ZimaBoard · Proxmox · Docker · Linux' },
    { title: 'Automation', sub: 'Node-RED · Home Assistant · ETS6' },
    { title: 'Dashboard', sub: 'React · TypeScript · Tailwind' },
  ]
  return (
    <div className="border border-paper-200 bg-paper-50 p-5 md:p-6">
      <p className="h-eyebrow">Architecture — full chain</p>
      <div className="mt-4 grid gap-2 md:grid-cols-5">
        {steps.map((s, i) => (
          <div key={s.title} className="relative">
            <div className="border border-paper-200 bg-white px-3 py-3">
              <p className="font-mono text-[10px] text-accent">{`0${i + 1}`}</p>
              <p className="mt-1 font-display text-base font-bold uppercase text-ink-900 leading-tight">
                {s.title}
              </p>
              <p className="mt-1 text-[11px] text-muted leading-snug">{s.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 h-4 w-4 items-center justify-center bg-accent text-white">
                <IconArrowRight className="h-3 w-3" />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] font-mono uppercase tracking-wider2 text-muted">
        Sensors → Microcontrollers → KNX / MQTT → Edge infrastructure → Automation logic → Dashboard
      </p>
    </div>
  )
}

export function ProjectsSection() {
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="scroll-mt-20 py-16 md:py-24 border-t border-paper-200">
      <SectionHeader
        index="02 / PROJECTS"
        title="Selected engineering work."
        kicker="Featured + supporting"
      />

      {/* Featured project */}
      {featuredProject && (
        <article className="border border-ink-900 bg-ink-900 text-white p-6 md:p-8 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-accent px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider2">
              Featured project
            </span>
            <StatusBadge status={featuredProject.status} />
            <span className="text-[11px] font-mono uppercase tracking-wider2 text-white/50">
              {featuredProject.category}
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            {featuredProject.name}
          </h3>
          <p className="mt-3 max-w-prose2 text-[15px] leading-[1.7] text-white/80">
            {featuredProject.description}
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider2 text-accent">
                Problem
              </p>
              <p className="mt-2 text-[14px] text-white/80 leading-[1.7]">
                Manage a room in real time: know when it is occupied, control the lights, expose
                the state to users, and prove the same approach scales into a full building
                automation architecture.
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider2 text-accent">
                System &amp; My contribution
              </p>
              <ul className="mt-2 space-y-1.5 text-[14px] text-white/80 leading-[1.7]">
                {featuredProject.contribution.map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-wider2 text-accent">
              Result
            </p>
            <p className="mt-2 text-[14px] text-white/80 leading-[1.7]">
              A working Smart Room prototype with a live dashboard, graded 19.5/20, extended into
              a multi-protocol building automation architecture with KNX, MQTT, Node-RED, Home
              Assistant and self-hosted edge infrastructure.
            </p>
          </div>

          <div className="mt-6">
            <ArchitectureFlow />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {featuredProject.technologies.map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider2 border border-white/20 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          {featuredProject.github && (
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-white text-ink-900 px-4 py-2.5 text-[12px] font-mono uppercase tracking-wider2 hover:bg-accent hover:text-white transition-colors"
              >
                <IconGithub className="h-4 w-4" />
                View on GitHub
                <IconExternal className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </article>
      )}

      {/* Supporting projects */}
      <div className="grid gap-5 md:grid-cols-2">
        {rest.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col border border-paper-200 bg-white p-6 hover:border-ink-900 transition-colors"
          >
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge status={p.status} />
              <span className="text-[11px] font-mono uppercase tracking-wider2 text-muted">
                {p.category}
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-ink-900">
              {p.name}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.65] text-ink-700">{p.description}</p>

            <ul className="mt-4 space-y-1.5 text-[13px] leading-[1.6] text-ink-700">
              {p.contribution.slice(0, 3).map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {p.technologies.slice(0, 6).map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
              {p.technologies.length > 6 && (
                <span className="tag">+{p.technologies.length - 6}</span>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-3 pt-4 border-t border-paper-200">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider2 link-quiet"
                >
                  <IconGithub className="h-3.5 w-3.5" />
                  Source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-paper-200 pt-6">
        <p className="text-[13px] text-muted max-w-prose2">
          All projects are published as public repositories with working code, hardware notes
          and configuration.
        </p>
        <a
          href={projects.find(() => true)?.github ?? 'https://github.com/Ab40D?tab=repositories'}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider2 text-accent hover:text-accent-600"
        >
          View all repositories on GitHub
          <IconExternal className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}
