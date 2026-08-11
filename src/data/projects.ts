// Curated list of engineering projects. Only projects supported by the source CV
// and the public GitHub repositories are included. No fabricated demos.

export type Project = {
  name: string
  status: 'completed' | 'in-progress'
  category:
    | 'Smart Building'
    | 'IoT'
    | 'Computer Vision'
    | 'Software'
    | 'Industrial Automation'
  description: string
  contribution: string[]
  technologies: string[]
  github?: string
  live?: string
  video?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Smart Room — Room Management System',
    status: 'completed',
    category: 'Smart Building',
    description:
      'Final-year project — Smart Room management system combining occupancy sensing, manual control, and a live web dashboard, extended into a complete building automation architecture.',
    contribution: [
      'Designed and built the Arduino-based prototype: PIR motion sensor + HC-SR04 ultrasonic sensor for dual occupancy detection, with LCD and WS2812 indicators.',
      'Implemented a Node.js bridge that streams room status and manual light control to a web dashboard over WebSockets / HTTP, with a USB serial link to the Arduino.',
      'Extended the prototype into a building automation architecture: ESP32 nodes, KNX (ETS6) and Shelly devices, MQTT messaging, Node-RED flows and Home Assistant dashboards.',
      'Integrated edge/server infrastructure on ZimaBoard 832 with Proxmox VE, Docker and Linux, hosting the MQTT broker and automation services.',
    ],
    technologies: [
      'Arduino',
      'ESP32',
      'HC-SR04',
      'PIR',
      'LCD',
      'WS2812',
      'Node.js',
      'WebSockets',
      'KNX',
      'ETS6',
      'Shelly',
      'MQTT',
      'Node-RED',
      'Home Assistant',
      'ZimaBoard',
      'Proxmox',
      'Docker',
      'Linux',
    ],
    github: 'https://github.com/Ab40D/Smart-Room-Management-System-prototype',
    featured: true,
  },
  {
    name: 'Smart Building & Room Dashboard',
    status: 'in-progress',
    category: 'Smart Building',
    description:
      'Centralized home-lab dashboard for building management: room/device overview, real-time occupancy tracking and energy monitoring across the KNX / MQTT / ESP32 / Shelly ecosystem.',
    contribution: [
      'Defined the system architecture: React/TypeScript/Tailwind frontend with a WebSocket/REST data layer, Mosquitto MQTT broker, Node-RED flows and Home Assistant integration.',
      'Documented the architecture, MQTT topics and KNX group addresses in the project repository.',
      'Iterating on the room/device overview and live data integration as the home-lab grows.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'WebSockets',
      'REST APIs',
      'MQTT',
      'Node-RED',
      'Home Assistant',
      'KNX',
      'ESP32',
      'Shelly',
    ],
    github: 'https://github.com/Ab40D/smart-building-dashboard',
  },
  {
    name: 'AI Hand-Gesture Control for Smart Home',
    status: 'completed',
    category: 'Computer Vision',
    description:
      'Real-time computer-vision application that recognizes hand gestures (open hand / closed fist) from a webcam and toggles smart-home devices through the Home Assistant REST API.',
    contribution: [
      'Built a Python pipeline using OpenCV and MediaPipe Hands to detect and classify hand gestures in real time.',
      'Wired gesture events to the Home Assistant REST API to toggle Shelly relays — fully local, no cloud dependency.',
    ],
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Home Assistant REST API', 'Shelly'],
    github: 'https://github.com/Ab40D/AI-Hand-Gesture-Control',
  },
  {
    name: 'KNX ↔ Shelly Lamp Control',
    status: 'completed',
    category: 'Industrial Automation',
    description:
      'KNX bus to Shelly relay integration for ON/OFF lamp control — a practical BMS retrofit pattern that extends an existing KNX installation with low-cost Wi-Fi IoT actuators.',
    contribution: [
      'Implemented the integration chain: KNX push button → KNX IP Interface (KNXnet/IP) → bridge service → Shelly HTTP command.',
      'Configured KNX group addresses in ETS6 and the Shelly device endpoints on the local network.',
      'Documented the retrofit pattern so it can be reproduced in other rooms without re-wiring the KNX bus.',
    ],
    technologies: ['KNX', 'KNXnet/IP', 'ETS6', 'Shelly', 'HTTP / REST'],
    github: 'https://github.com/Ab40D/knx-shelly-lamp-control',
  },
  {
    name: 'IoT MQTT Command System',
    status: 'completed',
    category: 'IoT',
    description:
      'End-to-end IoT command pipeline: commands issued from a Node-RED dashboard are published over MQTT and executed on an Android device via Tasker + Termux.',
    contribution: [
      'Designed the pipeline: Node-RED dashboard → MQTT broker (Mosquitto) → Android endpoint running Tasker with Termux.',
      'Demonstrated the pattern with a music-control use case, and structured the code so it can be extended to any command/topic pair.',
      'Deployed the stack on home-lab edge/server infrastructure: Node-RED on ZimaBoard 832, MQTT broker in an LXC container on Proxmox VE.',
    ],
    technologies: [
      'MQTT',
      'Mosquitto',
      'Node-RED',
      'ZimaBoard',
      'Proxmox VE',
      'LXC',
      'Linux',
      'Tasker',
      'Termux',
    ],
    github: 'https://github.com/Ab40D/iot-mqtt-command-system',
  },
  {
    name: 'Smart Light Control — Tasker + Home Assistant',
    status: 'completed',
    category: 'IoT',
    description:
      'Phone-driven room light automation: Tasker detects the phone screen state and calls the Home Assistant REST API to switch a Shelly relay — 100% local.',
    contribution: [
      'Configured the Tasker profile that triggers on phone screen state (on/off).',
      'Implemented the Home Assistant REST API call to toggle the Shelly relay for the room light.',
      'Kept the entire control loop on the local network — no cloud dependency.',
    ],
    technologies: ['Tasker', 'Home Assistant REST API', 'Shelly'],
    github: 'https://github.com/Ab40D/Smart-Light-Control-Using-Tasker-and-Home-Assistant',
  },
  {
    name: 'Se7enX Player — Local Audio Experience',
    status: 'completed',
    category: 'Software',
    description:
      'Browser-based local music player with drag-and-drop loading, multi-format playback, a 5-band equalizer and playlists.',
    contribution: [
      'Built a single-page web player focused on local files: drag-and-drop import, format handling and a 5-band EQ.',
      'Implemented playlist management and a clean playback UI in plain HTML/CSS/JavaScript.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
    github: 'https://github.com/Ab40D/SE7ENX-Player-Premium-Local-Audio-Experience',
  },
  {
    name: 'Personal Portfolio Website (HTML/CSS/JS + React/Vite)',
    status: 'completed',
    category: 'Software',
    description:
      'Previous iterations of the personal portfolio website, including a static HTML/CSS/JS version and a React/Vite version.',
    contribution: [
      'Maintained two implementations of the personal portfolio: a static site and a React/Vite single-page application.',
      'Structured the codebase so the same CV data can be reused across versions.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
    github: 'https://github.com/Ab40D/Abdelkhalek-Mammeri',
  },
]

export const featuredProject = projects.find((p) => p.featured) ?? projects[0]
