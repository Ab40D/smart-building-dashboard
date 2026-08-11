import { videos, channel } from '../data/videos'
import { SectionHeader } from '../components/SectionHeader'
import { VideoCard } from '../components/VideoCard'
import { IconArrowRight, IconYoutube } from '../components/icons'

export function VideosSection() {
  const [featured, ...rest] = videos
  return (
    <section id="videos" className="scroll-mt-20 py-16 md:py-24 border-t border-paper-200">
      <SectionHeader
        index="03 / VIDEOS"
        title="Tech videos from my channel."
        kicker="YouTube · Build logs"
      />

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[14px] leading-[1.65] text-ink-700 max-w-prose2">
          Short build logs and demos from the work I do — KNX, Home Assistant, Arduino, AI
          gestures and the rest. New ones go up whenever I finish something worth showing.
        </p>
        <a
          href={channel.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 border border-ink-900 px-4 py-2.5 text-[12px] font-mono uppercase tracking-wider2 text-ink-900 hover:bg-ink-900 hover:text-white transition-colors"
        >
          <IconYoutube className="h-4 w-4" />
          {channel.handle}
          <IconArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {featured && (
        <div className="mb-8">
          <VideoCard video={featured} />
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      )}
    </section>
  )
}
