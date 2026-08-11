import { useEffect } from 'react'
import { profile } from '../data/profile'
import { navSections } from '../data/navigation'
import { ProfilePhoto } from './ProfilePhoto'
import {
  IconGithub,
  IconLinkedin,
  IconYoutube,
  IconTiktok,
  IconClose,
  IconArrowRight,
  IconPrint,
  IconArrowDown,
} from './icons'

type SidebarProps = {
  active: string
  onSelect: (id: string) => void
  mobileOpen: boolean
  onMobileToggle: () => void
  onMobileClose: () => void
  onPrint?: () => void
}

export function Sidebar({
  active,
  onSelect,
  mobileOpen,
  onMobileToggle,
  onMobileClose,
  onPrint,
}: SidebarProps) {
  // Lock body scroll while the mobile drawer is open.
  // This also handles iOS by remembering the scroll position and
  // pinning the body in place without losing the page underneath.
  useEffect(() => {
    if (!mobileOpen) return
    const scrollY = window.scrollY
    const body = document.body
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    }
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onMobileClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.width = prev.width
      body.style.overflow = prev.overflow
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen, onMobileClose])

  return (
    <>
      {/* Desktop sidebar — unchanged */}
      <aside
        className="no-print sidebar-print-hide fixed left-0 top-0 z-30 hidden h-screen w-[300px] flex-col bg-ink-900 text-white md:flex sidebar-scanlines"
        aria-label="Primary"
      >
        <div className="flex h-full flex-col">
          {/* Header / identity */}
          <div className="relative px-7 pt-9 pb-6 border-b border-white/10">
            <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            <div className="relative inline-block">
              <div className="relative">
                <ProfilePhoto size={64} className="border border-white/15" />
                <span className="corner-mark" aria-hidden />
              </div>
            </div>

            <div className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight">
              {profile.firstName.toUpperCase()}
              <br />
              <span className="text-accent">{profile.lastName.toUpperCase()}</span>
            </div>

            <div className="mt-4 h-px w-10 bg-accent" />

            <p className="mt-4 text-[12px] font-medium uppercase tracking-wider2 text-white/60">
              {profile.title}
            </p>
            <p className="mt-1 text-[11px] font-mono uppercase tracking-wider2 text-white/40">
              {profile.tagline}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider2 text-white/60">
                <span className="pulse-dot" aria-hidden />
                Available · 2026
              </span>
              <span className="signal-bars text-accent" aria-hidden>
                <span /><span /><span /><span />
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="mt-4 flex-1 px-3" aria-label="Sections">
            <p className="px-4 pb-2 text-[10px] font-mono uppercase tracking-wider2 text-white/30">
              Navigate
            </p>
            <ul className="space-y-0.5">
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
                      {isActive && (
                        <IconArrowRight className="ml-auto h-3.5 w-3.5" />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 mx-3 border border-white/10 bg-white/[0.02] p-3">
              <p className="text-[9px] font-mono uppercase tracking-wider2 text-white/40">
                Stack · Online
              </p>
              <ul className="mt-2 space-y-1.5">
                {[
                  { label: 'KNX / ETS6', ok: true },
                  { label: 'MQTT Broker', ok: true },
                  { label: 'Node-RED', ok: true },
                  { label: 'Home Assistant', ok: true },
                  { label: 'ESP32 Mesh', ok: true },
                ].map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between text-[11px] font-mono text-white/70"
                  >
                    <span>{s.label}</span>
                    <span
                      className={
                        s.ok
                          ? 'h-1.5 w-1.5 rounded-full bg-signal'
                          : 'h-1.5 w-1.5 rounded-full bg-white/30'
                      }
                      aria-hidden
                    />
                  </li>
                ))}
              </ul>
            </div>
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

      {/* Mobile top bar — fixed at the top of the viewport on small screens */}
      <header
        className="no-print md:hidden fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-3 bg-ink-900 px-4 sm:px-5 py-3 text-white sidebar-scanlines"
        role="banner"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            onSelect('home')
          }}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label="Go to top"
        >
          <ProfilePhoto size={32} className="shrink-0 border border-white/20" />
          <span className="min-w-0 truncate font-display text-sm sm:text-base font-bold leading-none">
            {profile.firstName.toUpperCase()}
            <span className="text-accent"> {profile.lastName.toUpperCase()}</span>
          </span>
        </a>
        <button
          type="button"
          onClick={onMobileToggle}
          className="inline-flex shrink-0 items-center gap-1.5 rounded border border-white/20 px-2.5 sm:px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider2 text-white/90 hover:border-white/40"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
        >
          {mobileOpen ? (
            <>
              <IconClose className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Close</span>
            </>
          ) : (
            <span>Menu</span>
          )}
        </button>
      </header>

      {/* Mobile drawer — full-screen overlay, scroll-locked while open */}
      <div
        className={`no-print md:hidden fixed inset-0 z-50 bg-ink-900 text-white sidebar-scanlines transition-opacity ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10">
          <div className="flex min-w-0 items-center gap-3">
            <ProfilePhoto size={32} className="shrink-0 border border-white/20" />
            <div className="min-w-0 truncate font-display text-base sm:text-lg font-bold">
              {profile.firstName.toUpperCase()}{' '}
              <span className="text-accent">{profile.lastName.toUpperCase()}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onMobileClose}
            className="inline-flex shrink-0 items-center gap-1.5 rounded border border-white/20 px-2.5 py-1.5 text-[11px] font-mono uppercase tracking-wider2 text-white/90 hover:border-white/40"
            aria-label="Close menu"
          >
            <IconClose className="h-4 w-4" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        <nav
          className="px-4 py-4 max-h-[calc(100vh-64px)] overflow-y-auto"
          aria-label="Mobile sections"
        >
          <p className="px-2 pb-2 text-[10px] font-mono uppercase tracking-wider2 text-white/30">
            Navigate
          </p>
          <ul className="space-y-0.5">
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
                    {isActive && (
                      <IconArrowRight className="ml-auto h-3.5 w-3.5" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CV actions — same as the desktop topbar, just inside the mobile drawer */}
          {onPrint && (
            <div className="mt-6 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  onPrint()
                  onMobileClose()
                }}
                className="inline-flex items-center justify-center gap-1.5 border border-white/20 px-3 py-2.5 text-[11px] font-mono uppercase tracking-wider2 text-white/90 hover:border-white/40"
              >
                <IconPrint className="h-3.5 w-3.5" />
                Print
              </button>
              <button
                type="button"
                onClick={() => {
                  onPrint()
                  onMobileClose()
                }}
                className="inline-flex items-center justify-center gap-1.5 bg-accent text-white px-3 py-2.5 text-[11px] font-mono uppercase tracking-wider2 hover:bg-white hover:text-ink-900"
              >
                <IconArrowDown className="h-3.5 w-3.5" />
                Download CV
              </button>
            </div>
          )}

          <div className="mt-6 px-2 pt-4 border-t border-white/10">
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
            <p className="mt-4 text-[10px] font-mono uppercase tracking-wider2 text-white/30">
              © {new Date().getFullYear()} · El Bayadh, Algeria
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}
