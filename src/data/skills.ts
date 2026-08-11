// Technical skills grouped by domain. Only technologies supported by the
// source CV are included — no inflated or guessed skills.

export type SkillGroup = {
  domain: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    domain: 'Electronics & Embedded',
    items: [
      'Electronics',
      'Embedded Systems',
      'Microcontrollers',
      'Arduino',
      'ESP32 / ESP32-S3',
      'Sensors (PIR, Ultrasonic, Temp, Humidity)',
      'LCD & LED Indicators (WS2812)',
      'Hardware / Software Integration',
    ],
  },
  {
    domain: 'Industrial Automation',
    items: [
      'Industrial Automation',
      'Control Systems',
      'PLC Concepts',
      'SCADA',
      'Automation Logic',
      'Industrial Communication',
    ],
  },
  {
    domain: 'Smart Building / BMS',
    items: [
      'KNX',
      'ETS6',
      'Building Automation',
      'BMS',
      'Smart Buildings',
      'Lighting Control',
      'Blind / Shutter Control',
      'HVAC Concepts',
    ],
  },
  {
    domain: 'IoT & Communication',
    items: [
      'MQTT',
      'WebSockets',
      'REST APIs',
      'KNXnet/IP',
      'IoT',
      'Industrial IoT',
      'Edge Computing',
      'Connected Devices',
    ],
  },
  {
    domain: 'Automation Software',
    items: [
      'Node-RED',
      'Home Assistant',
      'Mosquitto MQTT',
      'Docker',
    ],
  },
  {
    domain: 'Infrastructure',
    items: [
      'Linux',
      'Proxmox VE',
      'Virtualization (LXC, VMs)',
      'ZimaBoard',
      'Edge / Server Deployment',
    ],
  },
  {
    domain: 'Web Development',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'Git',
      'GitHub',
    ],
  },
  {
    domain: 'Computer Vision',
    items: [
      'Python',
      'OpenCV',
      'MediaPipe Hands',
    ],
  },
]
