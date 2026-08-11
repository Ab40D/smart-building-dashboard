import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

type Props = {
  size?: number
  className?: string
}

/**
 * Renders the profile photo from public/images/profile.jpg.
 * If the file is missing (e.g. user hasn't dropped it in yet), shows a
 * tasteful monogram placeholder. Auto-detects the missing file with an
 * <img onError> handler.
 */
export function ProfilePhoto({ size = 96, className = '' }: Props) {
  const [failed, setFailed] = useState(false)
  const initials = 'AM'

  // If the file later shows up (e.g. user adds it after first paint), reset.
  useEffect(() => {
    setFailed(false)
  }, [profile.photo])

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-paper-100 text-ink-900 border border-paper-200 ${className}`}
        style={{ width: size, height: size }}
        aria-label="Profile photo placeholder"
      >
        <span
          className="font-display font-bold text-ink-900/70"
          style={{ fontSize: size * 0.42 }}
        >
          {initials}
        </span>
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
      className={`object-cover bg-paper-100 ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
