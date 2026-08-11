import type { ReactNode } from 'react'

type SectionHeaderProps = {
  index: string
  title: string
  kicker?: ReactNode
}

export function SectionHeader({ index, title, kicker }: SectionHeaderProps) {
  return (
    <div className="mb-8 md:mb-12">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-wider2 text-accent flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {index}
        </span>
        <div className="tick-line">
          <span className="tick-line-mid" aria-hidden />
        </div>
        {kicker && (
          <span className="font-mono text-[11px] uppercase tracking-wider2 text-muted flex items-center gap-2">
            {kicker}
          </span>
        )}
      </div>
      <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-tight text-ink-900">
        {title}
      </h2>
    </div>
  )
}
