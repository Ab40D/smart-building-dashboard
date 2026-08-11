// Certifications, training and courses. Only items supported by the source CV
// are included. Status reflects "completed" unless explicitly noted as ongoing.

export type Certification = {
  name: string
  issuer: string
  year?: string
  status: 'completed' | 'ongoing'
  kind: 'certification' | 'course' | 'training'
  note?: string
}

export const certifications: Certification[] = [
  {
    name: 'Meta Full-Stack Developer',
    issuer: 'Meta',
    status: 'completed',
    kind: 'certification',
  },
  {
    name: 'Google IT Support',
    issuer: 'Google',
    status: 'completed',
    kind: 'certification',
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    status: 'completed',
    kind: 'certification',
  },
  {
    name: 'Node-RED Fundamentals',
    issuer: '—',
    status: 'completed',
    kind: 'training',
  },
  {
    name: 'Node-RED Advanced',
    issuer: '—',
    status: 'completed',
    kind: 'training',
  },
  {
    name: 'KNX / ETS eCampus Training',
    issuer: 'KNX Association',
    status: 'completed',
    kind: 'training',
  },
  {
    name: 'Design of Power Distribution for Highrise Building',
    issuer: 'L&T EduTech',
    status: 'completed',
    kind: 'course',
  },
]
