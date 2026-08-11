import { useState } from 'react'
import type { Video } from '../data/videos'
import { IconArrowRight } from './icons'

type VideoCardProps = {
  video: Video
  featured?: boolean
}

/**
 * Privacy-friendly YouTube embed.
 * - Shows a thumbnail + play button by default (no third-party JS loaded).
 * - On click, swaps in the official iframe using youtube-nocookie.
 * - Keeps the page fast and avoids tracking until the user actively plays.
 */
export function VideoCard({ video, featured = false }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)
  const embed = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`

  return (
    <div
      className={`group relative block border bg-white transition-colors overflow-hidden ${
        playing ? 'border-ink-900' : 'border-paper-200 hover:border-ink-900'
      }`}
    >
      {/* top accent line on hover */}
      <span
        className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full z-10"
        aria-hidden
      />

      <div
        className={`video-frame relative bg-ink-900 overflow-hidden ${
          featured ? 'aspect-[16/9]' : 'aspect-[16/9]'
        }`}
      >
        {playing ? (
          <iframe
            src={embed}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 block h-full w-full"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={thumb}
              alt={video.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-ink-900 shadow-lg transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
              </span>
            </span>
            {video.duration && (
              <span className="absolute bottom-2 right-2 bg-black/85 px-1.5 py-0.5 text-[11px] font-mono text-white">
                {video.duration}
              </span>
            )}
            {/* category chip top-left */}
            <span className="absolute top-2 left-2 bg-accent/95 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider2 text-white">
              {video.category}
            </span>
          </button>
        )}
      </div>

      <div className="p-4 md:p-5">
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider2 text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {video.category}
        </p>
        <h3 className="mt-2 font-display text-lg md:text-xl font-bold leading-snug text-ink-900 group-hover:text-accent transition-colors">
          {video.title}
        </h3>
        <p className="mt-2 text-[13px] leading-[1.6] text-ink-700">{video.description}</p>
        <a
          href={video.url}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider2 text-accent"
        >
          Watch on YouTube
          <IconArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  )
}
