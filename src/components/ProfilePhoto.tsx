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
 * If the image can't be loaded (404, network error, etc.), a clean monogram
 * placeholder is shown so the layout never breaks.
 */
export function ProfilePhoto({ size = 96, className = '', ring = false }: Props) {
  const [failed, setFailed] = useState(false)
  const initials =
    (profile.firstName?.[0] ?? 'A').toUpperCase() +
    (profile.lastName?.[0] ?? 'M').toUpperCase()

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-ink-900 text-white ${className}`}
        style={{ width: size, height: size }}
        aria-label="Profile photo placeholder"
        role="img"
      >
        {/* subtle gradient so the placeholder feels intentional */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-700 to-ink-900" />
        <span
          className="relative font-display font-bold text-white/90"
          style={{ fontSize: size * 0.38, letterSpacing: '0.02em' }}
        >
          {initials}
        </span>
        {ring && (
          <span className="absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden />
        )}
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
