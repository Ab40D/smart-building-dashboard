// Education timeline.

export type Education = {
  degree: string
  specialization: string
  institution: string
  location: string
  start: string
  end: string
  grade?: string
  finalProject?: {
    title: string
    description: string
    grade: string
  }
  notes?: string[]
}

export const education: Education[] = [
  {
    degree: 'Licence',
    specialization: 'Electronics — Industrial Equipment Electronics',
    institution: 'University (Algeria)',
    location: 'Algeria',
    start: '2023',
    end: 'June 2026',
    finalProject: {
      title: 'Réalisation d’un système de gestion des salles – Smart Room',
      description:
        'Smart Room management system: occupancy detection, manual light control and a live web dashboard, extended into a full building automation architecture (ESP32, KNX/ETS6, MQTT, Node-RED, Home Assistant, edge/server infrastructure).',
      grade: '19.5 / 20',
    },
    notes: [
      'Final-year project focused on the full chain: sensors → microcontrollers → KNX/MQTT → edge infrastructure → automation logic → user dashboard.',
    ],
  },
]
