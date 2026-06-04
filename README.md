# 🏢 Smart Building & Room Dashboard

> **Centralized home lab dashboard** for building management, occupancy tracking, energy monitoring, and smart automation using **KNX, MQTT, ESP32, Shelly, Node-RED, and Home Assistant**.

[![GitHub stars](https://img.shields.io/github/stars/abdelkhalek/smart-building-dashboard)](https://github.com/abdelkhalek/smart-building-dashboard/stargazers)
[![License](https://img.shields.io/github/license/abdelkhalek/smart-building-dashboard)](LICENSE)

## 🚀 Features

| Feature | Status | Description |
|---------|--------|-------------|
| **Smart Building Dashboard** | 🚧 | Overview of all rooms, devices, and systems |
| **Room Status Dashboard** | 🚧 | Real-time room occupancy and availability |
| **Smart Meeting Room** | 🚧 | Booking system for meeting rooms |
| **Occupancy Counter** | 🚧 | People counting using presence detectors |
| **Energy Monitoring** | 🚧 | Track power consumption by room/device |
| **Scene Controller** | 🚧 | Predefined lighting/scenes (home, away, night) |
| **Smart Light Controller** | 🚧 | Control lights via ESP32, Shelly, KNX |
| **Presence-Based Lighting** | 🚧 | Auto-turn lights based on occupancy |
| **Arduino Sensor Hub** | 🚧 | Read sensors (temp, humidity, motion) |
| **Digital Twin Building** | 🚧 | 3D visualization of building |

## 🏗️ Architecture
┌─────────────────────────────────────────────────────────┐
│ React Dashboard (Frontend) │
│ Port: 3000 / 80 │
└───────────────────────┬─────────────────────────────────┘
│ WebSocket / REST API
┌───────────────────────▼─────────────────────────────────┐
│ Node.js Backend (Optional) │
│ Port: 4000 │
└───────────────────────┬─────────────────────────────────┘
│ MQTT (1883) / WebSockets
┌───────────────────────▼─────────────────────────────────┐
│ MQTT Broker (Mosquitto/EMQX) │
│ Port: 1883 / 8883 │
└───────┬───────────────┬───────────────┬─────────────────┘
│ │ │
┌───────▼───────┐ ┌────▼───────┐ ┌────▼─────────────────┐
│ Node-RED │ │ Home │ │ ESP32 / Shelly │
│ Flows │ │ Assistant │ │ KNX Devices │
│ Port: 1880 │ │ Port: 8123│ │ (Sensors, Lights) │
└───────────────┘ └────────────┘ └──────────────────────┘

text

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React, TypeScript, TailwindCSS |
| **Backend** | Node.js, Express (optional) |
| **Real-time** | MQTT, WebSocket |
| **Automation** | Node-RED, Home Assistant |
| **Protocols** | KNX, MQTT, ZigBee, Modbus TCP |
| **Hardware** | ESP32, Shelly, KNX IP Interface, WAGO PLC |
| **Database** | SQLite, InfluxDB (energy data) |
| **Deployment** | Docker, Proxmox, LXC |

## 📦 Installation

### 1. Clone repository
```bash
git clone https://github.com/abdelkhalek/smart-building-dashboard.git
cd smart-building-dashboard
```

### 2. Deploy with Docker Compose
```bash
docker-compose up -d
```

This will start:
- MQTT Broker (Mosquitto)
- Node-RED
- Home Assistant
- Frontend Dashboard
- Backend API (optional)

### 3. Access services
| Service | URL |
|---------|-----|
| Dashboard | http://localhost:3000 |
| Node-RED | http://localhost:1880 |
| Home Assistant | http://localhost:8123 |
| MQTT Broker | localhost:1883 |

## 🔧 Configuration

### MQTT Topics
See [`mqtt/topics.md`](mqtt/topics.md)

### KNX Group Addresses
See [`knx/group-addresses.md`](knx/group-addresses.md)

### ESP32 Configuration
See [`esp32/README.md`](esp32/README.md)

## 🤝 Contributing

Contributions welcome! Open issues and PRs.

## 📄 License

MIT License - see [LICENSE](LICENSE)

## 👤 Author

**Abdelkhalek Mammeri**
- GitHub: [@abdelkhalek](https://github.com/abdelkhalek)
- Location: Oran, Algeria
- Profile: Full-Stack IoT Developer / Junior IoT & Electronics Engineer

---

🏗️ Running on **Proxmox** with **ZimaBoard**
