import { profile } from '../data/profile'
import { SectionHeader } from '../components/SectionHeader'
import {
  IconMail,
  IconPhone,
  IconPin,
  IconGithub,
  IconLinkedin,
  IconYoutube,
  IconTiktok,
  IconArrowRight,
} from '../components/icons'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24 border-t border-paper-200">
      <SectionHeader
        index="08 / CONTACT"
        title="Let’s build something real."
        kicker="Open to opportunities"
      />

      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-[15px] leading-[1.7] text-ink-800 max-w-prose2">
            I am currently open to internships, graduate programs and junior / entry-level
            opportunities in <span className="font-medium text-ink-900">electronics engineering</span>,{' '}
            <span className="font-medium text-ink-900">industrial automation</span>,{' '}
            <span className="font-medium text-ink-900">smart buildings / BMS</span> and{' '}
            <span className="font-medium text-ink-900">industrial IoT</span>. If you are working
            on real systems and need an engineer who can integrate hardware, automation and
            software — let’s talk.
          </p>

          <div className="mt-8 space-y-3 text-[15px]">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 group"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-paper-200 group-hover:border-accent group-hover:text-accent text-ink-900">
                <IconMail className="h-4 w-4" />
              </span>
              <span className="link-quiet font-mono text-[14px]">{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 group">
              <span className="flex h-9 w-9 items-center justify-center border border-paper-200 group-hover:border-accent group-hover:text-accent text-ink-900">
                <IconPhone className="h-4 w-4" />
              </span>
              <span className="link-quiet font-mono text-[14px]">{profile.phone}</span>
            </a>
            <p className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-paper-200 text-ink-900">
                <IconPin className="h-4 w-4" />
              </span>
              <span className="font-mono text-[14px] text-ink-800">{profile.location}</span>
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="border border-paper-200 bg-paper-50 p-6">
            <p className="h-eyebrow">Online profiles</p>
            <ul className="mt-4 space-y-3 text-[14px]">
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between gap-3 group border border-paper-200 bg-white px-4 py-3 hover:border-ink-900"
                >
                  <span className="flex items-center gap-3">
                    <IconGithub className="h-4 w-4 text-ink-900" />
                    <span className="font-medium text-ink-900">GitHub</span>
                  </span>
                  <span className="font-mono text-[12px] text-muted truncate max-w-[180px]">
                    Ab40D
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between gap-3 group border border-paper-200 bg-white px-4 py-3 hover:border-ink-900"
                >
                  <span className="flex items-center gap-3">
                    <IconLinkedin className="h-4 w-4 text-ink-900" />
                    <span className="font-medium text-ink-900">LinkedIn</span>
                  </span>
                  <span className="font-mono text-[12px] text-muted truncate max-w-[180px]">
                    abdelkhalekmammeri
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={profile.links.youtube}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between gap-3 group border border-paper-200 bg-white px-4 py-3 hover:border-ink-900"
                >
                  <span className="flex items-center gap-3">
                    <IconYoutube className="h-4 w-4 text-ink-900" />
                    <span className="font-medium text-ink-900">YouTube</span>
                  </span>
                  <span className="font-mono text-[12px] text-muted truncate max-w-[180px]">
                    @abdelkhalekmammeri
                  </span>
                </a>
              </li>
              {profile.links.tiktok && (
                <li>
                  <a
                    href={profile.links.tiktok}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between gap-3 group border border-paper-200 bg-white px-4 py-3 hover:border-ink-900"
                  >
                    <span className="flex items-center gap-3">
                      <IconTiktok className="h-4 w-4 text-ink-900" />
                      <span className="font-medium text-ink-900">TikTok</span>
                    </span>
                    <span className="font-mono text-[12px] text-muted truncate max-w-[180px]">
                      @abdelkhalekmammeri
                    </span>
                  </a>
                </li>
              )}
            </ul>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-ink-900 text-white px-4 py-3 text-[12px] font-mono uppercase tracking-wider2 hover:bg-accent transition-colors"
            >
              Send an email
              <IconArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-paper-200 pt-6 text-[11px] font-mono uppercase tracking-wider2 text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React · TypeScript · Vite · Tailwind</p>
      </div>
    </section>
  )
}
