// YouTube videos — technical / project content from the channel
// https://www.youtube.com/@abdelkhalekmammeri
// Only videos actually listed on the public channel are included.

export type Video = {
  id: string // YouTube video ID
  title: string
  url: string
  duration?: string
  category: 'Smart Building' | 'IoT' | 'Computer Vision' | 'Tutorial'
  description: string
}

export const channel = {
  handle: '@abdelkhalekmammeri',
  url: 'https://www.youtube.com/@abdelkhalekmammeri',
  description:
    'Just a simple guy who prefers building over talking. I share what I learn — tech, ideas, real experiences. No trends, no noise. Just useful stuff. If it helps you, it helps me too.',
}

export const videos: Video[] = [
  {
    id: 'qdAkY2eS1vQ',
    title: 'Control Smart Lights with ON/OFF Buttons | Home Assistant + Python',
    url: 'https://www.youtube.com/watch?v=qdAkY2eS1vQ',
    duration: '2:57',
    category: 'Smart Building',
    description:
      'Build a Python control surface for Home Assistant: ON/OFF buttons drive real smart lights over the local network — no cloud, no fuss.',
  },
  {
    id: '7ZPLV5HUosU',
    title: 'Arduino Web Dashboard | Real-Time IoT Control System',
    url: 'https://www.youtube.com/watch?v=7ZPLV5HUosU',
    duration: '4:04',
    category: 'IoT',
    description:
      'A live web dashboard wired to an Arduino over a serial bridge — real sensor data, real control, in real time.',
  },
  {
    id: '1srEHiUDynw',
    title: 'AI Hand Gesture Control for Smart Building Automation | Python + MediaPipe + KNX + Home Assistant',
    url: 'https://www.youtube.com/watch?v=1srEHiUDynw',
    duration: '0:27',
    category: 'Computer Vision',
    description:
      'A short demo of a computer-vision pipeline that turns hand gestures into KNX / Home Assistant actions.',
  },
]
