// Professional experience and internships.
// Only entries supported by the source CV are included.

export type Experience = {
  company: string
  role: string
  location: string
  start: string
  end: string
  bullets: string[]
  type: 'internship' | 'work'
}

export const experiences: Experience[] = [
  {
    company: 'SAEGD',
    role: 'Industrial Intern — SCADA & Industrial Automation',
    location: 'El Bayadh, Algeria',
    start: '2025',
    end: '2025',
    type: 'internship',
    bullets: [
      'Worked inside an industrial automation environment, with hands-on exposure to SCADA systems used to supervise and control industrial processes.',
      'Observed and assisted in the operation of control loops, instrumentation and human-machine interfaces typical of an industrial site.',
      'Connected classroom knowledge in electronics, control systems and PLC concepts to a real operational context.',
    ],
  },
]
