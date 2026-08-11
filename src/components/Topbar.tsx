import { IconArrowDown, IconPrint } from './icons'

type TopbarProps = {
  onDownload: () => void
  onPrint: () => void
}

export function Topbar({ onDownload, onPrint }: TopbarProps) {
  return (
    <div className="no-print sticky top-0 z-20 hidden border-b border-paper-200 bg-white/90 backdrop-blur md:block">
      <div className="ml-[300px]">
        <div className="container-cv flex items-center justify-between py-3">
          <p className="font-mono text-[11px] uppercase tracking-wider2 text-muted">
            Online CV · Updated 2026
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex items-center gap-2 border border-paper-200 px-3.5 py-2 text-[12px] font-mono uppercase tracking-wider2 text-ink-900 hover:border-ink-900"
            >
              <IconPrint className="h-3.5 w-3.5" />
              Print
            </button>
            <button
              type="button"
              onClick={onDownload}
              className="inline-flex items-center gap-2 bg-ink-900 text-white px-3.5 py-2 text-[12px] font-mono uppercase tracking-wider2 hover:bg-accent"
            >
              <IconArrowDown className="h-3.5 w-3.5" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
