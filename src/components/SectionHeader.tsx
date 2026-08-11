type SectionHeaderProps = {
  index: string
  title: string
  kicker?: string
}

export function SectionHeader({ index, title, kicker }: SectionHeaderProps) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider2 text-accent">{index}</span>
        <span className="h-px flex-1 bg-paper-200" />
        {kicker && (
          <span className="font-mono text-[11px] uppercase tracking-wider2 text-muted">
            {kicker}
          </span>
        )}
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ink-900">
        {title}
      </h2>
    </div>
  )
}
