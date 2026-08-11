import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconArrowDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v14" />
      <path d="m6 12 6 6 6-6" />
    </svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function IconExternal(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  )
}

export function IconGithub(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.5 1.5-4.5-2.5-6-3" />
      <path d="M15 22v-4a3.4 3.4 0 0 0-.9-2.5c3-.3 6.1-1.5 6.1-6.5A4.6 4.6 0 0 0 19 5.8 4.2 4.2 0 0 0 18.9 2S17.7 1.6 15 3.4a13 13 0 0 0-6 0C6.3 1.6 5.1 2 5.1 2A4.2 4.2 0 0 0 5 5.8 4.6 4.6 0 0 0 3.8 8.5c0 5 3.1 6.2 6.1 6.5A3.4 3.4 0 0 0 9 17.5V22" />
    </svg>
  )
}

export function IconLinkedin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function IconYoutube(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 8.5a4.5 4.5 0 0 0-4.5-4.5h-11A4.5 4.5 0 0 0 2 8.5v7A4.5 4.5 0 0 0 6.5 20h11A4.5 4.5 0 0 0 22 15.5v-7Z" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  )
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  )
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export function IconCpu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3" />
      <path d="M15 1v3" />
      <path d="M9 20v3" />
      <path d="M15 20v3" />
      <path d="M20 9h3" />
      <path d="M20 14h3" />
      <path d="M1 9h3" />
      <path d="M1 14h3" />
    </svg>
  )
}

export function IconChip(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
      <path d="M9 9h6v6H9z" />
    </svg>
  )
}

export function IconBuilding(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="2" width="16" height="20" />
      <path d="M9 22V12h6v10" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
    </svg>
  )
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  )
}

export function IconWifi(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 13a10 10 0 0 1 14 0" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M2 8.8a15 15 0 0 1 20 0" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  )
}

export function IconCode(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  )
}

export function IconPrint(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9V2h12v7" />
      <rect x="3" y="9" width="18" height="9" rx="1" />
      <path d="M6 14h12v7H6z" />
    </svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function IconTiktok(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4v9a4 4 0 1 1-4-4" />
      <path d="M14 4c0 2.5 2 4.5 4.5 4.5" />
    </svg>
  )
}
