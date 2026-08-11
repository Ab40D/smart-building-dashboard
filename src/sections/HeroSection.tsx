import { profile } from '../data/profile'
import { ProfilePhoto } from '../components/ProfilePhoto'
import {
  IconArrowRight,
  IconGithub,
  IconLinkedin,
  IconYoutube,
  IconTiktok,
  IconMail,
  IconPin,
} from '../components/icons'

type HeroSectionProps = {
  onJump: (id: string) => void
}

export function HeroSection({ onJump }: HeroSectionProps) {
  return (
    <section id="home" className="scroll-mt-20 pt-10 pb-12 md:pt-16 md:pb-20">
      <div className="grid gap-10 md:grid-cols-12 md:items-start">
        {/* Left — photo + meta column */}
        <div className="md:col-span-4">
          <ProfilePhoto
            size={300}
            className="w-full max-w-[300px] aspect-square border border-paper-200"
          />

          <div className="mt-6 space-y-3">
            <p className="flex items-center gap-2 text-[13px] text-ink-800">
              <IconPin className="h-3.5 w-3.5 text-muted" />
              {profile.location}
            </p>
            <p className="flex items-center gap-2 text-[13px] text-ink-800">
              <IconMail className="h-3.5 w-3.5 text-muted" />
              <a href={`mailto:${profile.email}`} className="link-quiet font-mono">
                {profile.email}
              </a>
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center border border-paper-200 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white transition-colors"
            >
              <IconGithub className="h-4 w-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center border border-paper-200 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white transition-colors"
            >
              <IconLinkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.links.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center border border-paper-200 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white transition-colors"
            >
              <IconYoutube className="h-4 w-4" />
            </a>
            {profile.links.tiktok && (
              <a
                href={profile.links.tiktok}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center border border-paper-200 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white transition-colors"
              >
                <IconTiktok className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Right — name, headline, CTAs */}
        <div className="md:col-span-8">
          <p className="h-eyebrow">Portfolio · Online since 2026</p>

          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-ink-900">
            {profile.firstName}
            <br />
            <span className="text-accent">{profile.lastName}</span>
          </h1>

          <p className="mt-5 font-display text-xl md:text-2xl text-ink-800 max-w-prose2">
            {profile.title} · <span className="text-muted">{profile.tagline}</span>
          </p>

          <p className="mt-6 text-[15px] leading-[1.7] text-ink-800 max-w-prose2">
            {profile.shortIntro}
          </p>

          <p className="mt-3 text-[15px] leading-[1.7] text-ink-700 max-w-prose2">
            {profile.heroLine}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onJump('projects')}
              className="inline-flex items-center gap-2 bg-ink-900 text-white px-5 py-3 text-[12px] font-mono uppercase tracking-wider2 hover:bg-accent transition-colors"
            >
              See my projects
              <IconArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onJump('videos')}
              className="inline-flex items-center gap-2 border border-ink-900 text-ink-900 px-5 py-3 text-[12px] font-mono uppercase tracking-wider2 hover:bg-ink-900 hover:text-white transition-colors"
            >
              Watch the videos
              <IconArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onJump('contact')}
              className="inline-flex items-center gap-2 px-3 py-3 text-[12px] font-mono uppercase tracking-wider2 text-ink-900 hover:text-accent"
            >
              Get in touch
              <IconArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Quick stats strip */}
          <div className="mt-10 grid grid-cols-3 gap-px bg-paper-200 border border-paper-200 max-w-xl">
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

      {/* Now / currently band */}
      <div className="mt-12 md:mt-16 border border-ink-900 bg-ink-900 text-white">
        <div className="grid gap-px md:grid-cols-4 bg-ink-900">
          {profile.now.map((n) => (
            <div key={n.label} className="bg-ink-900 px-5 py-5">
              <p className="font-mono text-[10px] uppercase tracking-wider2 text-accent">
                {n.label}
              </p>
              <p className="mt-2 text-[14px] leading-[1.55] text-white/90">{n.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
