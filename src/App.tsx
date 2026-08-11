import { useEffect, useState, useCallback } from 'react'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { VideosSection } from './sections/VideosSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { EducationSection } from './sections/EducationSection'
import { SkillsSection } from './sections/SkillsSection'
import { CertificationsSection } from './sections/CertificationsSection'
import { ContactSection } from './sections/ContactSection'
import { PrintableCV } from './components/PrintableCV'
import { navSections } from './data/navigation'

const SECTION_IDS = navSections.map((s) => s.id)

function useActiveSection() {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return active
}

function useDownloadCV() {
  return useCallback(() => {
    // Trigger the browser's print dialog with the ATS-friendly layout.
    // Users can then choose "Save as PDF" as their browser's print destination.
    window.print()
  }, [])
}

function App() {
  const active = useActiveSection()
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDownload = useDownloadCV()

  const handleSelect = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-white text-ink-900">
      {/* Faint engineering grid texture for the main content */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-60"
        aria-hidden
      />
      <Sidebar
        active={active}
        onSelect={handleSelect}
        mobileOpen={mobileOpen}
        onMobileToggle={() => setMobileOpen((v) => !v)}
        onMobileClose={() => setMobileOpen(false)}
        onPrint={handleDownload}
      />

      <Topbar onDownload={handleDownload} onPrint={handleDownload} />

      <main className="relative z-10 md:ml-[300px]">
        <div className="pt-14 md:pt-0">
          <div className="container-cv">
            <HeroSection onJump={handleSelect} />
            <ProjectsSection />
            <VideosSection />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <CertificationsSection />
            <ContactSection />
          </div>
        </div>
      </main>

      <PrintableCV />
    </div>
  )
}

export default App
