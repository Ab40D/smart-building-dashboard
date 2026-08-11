import { IconArrowDown, IconPrint } from './icons'

type TopbarProps = {
  onDownload: () => void
  onPrint: () => void
}

export function Topbar({ onDownload, onPrint }: TopbarProps) {
  return (
    <div className="no-print sticky top-0 z-20 hidden border-b border-paper-200 bg-white/85 backdrop-blur md:block">
      <div className="ml-[300px]">
        <div className="container-cv flex items-center justify-between py-3">
          <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-wider2 text-muted">
            <span className="flex items-center gap-2">
              <span className="pulse-dot" aria-hidden />
              System online
            </span>
            <span className="text-paper-200">|</span>
            <span>Last updated · 2026</span>
            <span className="text-paper-200">|</span>
            <span className="signal-bars text-accent" aria-hidden>
              <span /><span /><span /><span />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrint}
              className="group inline-flex items-center gap-2 border border-paper-200 px-3.5 py-2 text-[12px] font-mono uppercase tracking-wider2 text-ink-900 hover:border-ink-900 transition-colors"
            >
              <IconPrint className="h-3.5 w-3.5" />
              Print
            </button>
            <button
              type="button"
              onClick={onDownload}
              className="group inline-flex items-center gap-2 bg-ink-900 text-white px-3.5 py-2 text-[12px] font-mono uppercase tracking-wider2 hover:bg-accent transition-colors"
            >
              <IconArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
