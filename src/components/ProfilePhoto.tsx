import { useState } from 'react'
import { profile } from '../data/profile'

type Props = {
  size?: number
  className?: string
  ring?: boolean
}

/**
 * Renders the profile photo.
 *
 * Where it comes from (in order):
 *   1. The value of `profile.photo` in src/data/profile.ts
 *      - If that's a full URL (https://…), it's used directly.
 *      - If it's a relative path (e.g. /images/profile.jpg), Vite serves it
 *        from the public/ folder.
 *
 * If the image can't be loaded (404, network error, etc.), a clean
 * placeholder is shown so the layout never breaks.
 */
export function ProfilePhoto({ size = 96, className = '', ring = false }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-paper-100 text-ink-900 ${className}`}
        style={{ width: size, height: size }}
        aria-label="Profile photo placeholder"
        role="img"
      >
        {/* Soft hairline pattern so the placeholder reads as intentional */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(0,0,0,0.04) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.04) 75%, transparent 75%, transparent)',
            backgroundSize: '12px 12px',
          }}
          aria-hidden
        />
        {/* Tiny camera glyph instead of giant initials */}
        <svg
          viewBox="0 0 24 24"
          className="relative h-1/3 w-1/3 text-ink-900/35"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M3 7h3l2-2h8l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        {ring && <span className="absolute inset-0 ring-1 ring-inset ring-paper-200" aria-hidden />}
      </div>
    )
  }

  return (
    <img
      src={profile.photo}
      alt={`${profile.name} — profile photo`}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      loading="lazy"
      decoding="async"
      className={`object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
