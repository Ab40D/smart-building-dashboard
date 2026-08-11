import { profile } from '../data/profile'
import { navSections } from '../data/navigation'
import { ProfilePhoto } from './ProfilePhoto'
import { IconGithub, IconLinkedin, IconYoutube, IconTiktok, IconClose, IconArrowRight } from './icons'

type SidebarProps = {
  active: string
  onSelect: (id: string) => void
  mobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({ active, onSelect, mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="no-print sidebar-print-hide fixed left-0 top-0 z-30 hidden h-screen w-[300px] flex-col justify-between bg-ink-900 text-white md:flex"
        aria-label="Primary"
      >
        <div className="flex h-full flex-col">
          <div className="px-7 pt-9 pb-6">
            <ProfilePhoto
              size={72}
              className="border border-white/15"
            />
            <div className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight">
              {profile.firstName.toUpperCase()}
              <br />
              <span className="text-accent">{profile.lastName.toUpperCase()}</span>
            </div>
            <div className="mt-4 h-[2px] w-10 bg-accent" />
            <p className="mt-4 text-[12px] font-medium uppercase tracking-wider2 text-white/60">
              {profile.title}
            </p>
            <p className="mt-1 text-[11px] font-mono uppercase tracking-wider2 text-white/40">
              {profile.tagline}
            </p>
          </div>

          <nav className="mt-2 flex-1 px-3" aria-label="Sections">
            <ul className="space-y-1">
              {navSections.map((s) => {
                const isActive = active === s.id
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        onSelect(s.id)
                      }}
                      className={`nav-item group ${isActive ? 'nav-item-active' : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span>{s.label}</span>
                      {isActive && <IconArrowRight className="ml-auto h-3.5 w-3.5" />}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="px-7 pb-7 pt-6 border-t border-white/10">
            <p className="h-eyebrow text-white/40">Find me online</p>
            <div className="mt-3 flex items-center gap-3 text-white/80">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
                aria-label="GitHub"
              >
                <IconGithub className="h-5 w-5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
                aria-label="LinkedIn"
              >
                <IconLinkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.links.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
                aria-label="YouTube"
              >
                <IconYoutube className="h-5 w-5" />
              </a>
              {profile.links.tiktok && (
                <a
                  href={profile.links.tiktok}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-accent"
                  aria-label="TikTok"
                >
                  <IconTiktok className="h-5 w-5" />
                </a>
              )}
            </div>
            <p className="mt-4 text-[10px] font-mono uppercase tracking-wider2 text-white/30">
              © {new Date().getFullYear()} · El Bayadh, Algeria
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header
        className="no-print md:hidden fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-ink-900 px-5 py-3 text-white"
        role="banner"
      >
        <a href="#about" onClick={() => onSelect('about')} className="flex items-center gap-2">
          <span className="font-display text-lg font-bold leading-none">
            {profile.firstName.toUpperCase()}
            <span className="text-accent"> {profile.lastName.toUpperCase()}</span>
          </span>
        </a>
        <button
          type="button"
          onClick={() => onMobileClose()}
          className="rounded border border-white/20 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider2 text-white/80"
          aria-label="Open menu"
        >
          Menu
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="no-print md:hidden fixed inset-0 z-50 bg-ink-900 text-white"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
            <div className="font-display text-lg font-bold">
              {profile.firstName.toUpperCase()} <span className="text-accent">{profile.lastName.toUpperCase()}</span>
            </div>
            <button
              type="button"
              onClick={onMobileClose}
              className="rounded border border-white/20 p-1.5 text-white/80"
              aria-label="Close menu"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>
          <nav className="px-4 py-4" aria-label="Mobile sections">
            <ul className="space-y-1">
              {navSections.map((s) => {
                const isActive = active === s.id
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        onSelect(s.id)
                        onMobileClose()
                      }}
                      className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
                    >
                      <span>{s.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="px-7 pt-4 border-t border-white/10">
            <p className="h-eyebrow text-white/40">Find me online</p>
            <div className="mt-3 flex items-center gap-4 text-white/80">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
                aria-label="GitHub"
              >
                <IconGithub className="h-5 w-5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
                aria-label="LinkedIn"
              >
                <IconLinkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.links.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
                aria-label="YouTube"
              >
                <IconYoutube className="h-5 w-5" />
              </a>
              {profile.links.tiktok && (
                <a
                  href={profile.links.tiktok}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-accent"
                  aria-label="TikTok"
                >
                  <IconTiktok className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
