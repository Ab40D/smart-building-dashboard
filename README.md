# Abdelkhalek Mammeri — Portfolio

Personal portfolio website for **Abdelkhalek Mammeri** — Electronics Engineer focused on
Smart Buildings, Building Automation (BMS / KNX), Industrial IoT and Embedded Systems.

> A serious engineering profile, not a generic developer portfolio.

## Stack

- **React 18** + **TypeScript**
- **Vite** for dev server and build
- **Tailwind CSS** for styling
- Centralized content in `src/data/` (profile, experience, education, projects, skills,
  certifications, languages, videos, navigation)
- Zero other runtime dependencies

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview production build
```

## Sections

- **Home** — hero with photo, headline, CTAs, quick stats, "Now / Currently" band
- **Projects** — featured (Smart Room) + supporting engineering projects with GitHub links
- **Videos** — privacy-friendly YouTube embeds
- **About** — engineering profile pillars + channel bio
- **Experience** — internships and work history
- **Education** — degree + final-year project
- **Skills** — grouped by domain (no fake percentages)
- **Certifications** — completed certifications, courses and training
- **Contact** — email, phone, GitHub, LinkedIn, YouTube, TikTok (if configured)

## How to update content

Everything lives in `src/data/`. Open the file, edit the value, save — the dev server
hot-reloads. See [`RESUME.md`](./RESUME.md) for the full bilingual (Arabic + English)
guide on:

- How the website is built (architecture, file structure, design system)
- How to add a new project
- How to add a new YouTube video
- How to add TikTok
- How to update skills, certifications, experience, education
- How to add the profile photo

## Download / Print CV

The top bar has **Download CV** and **Print** buttons that trigger the browser's
print dialog with an **ATS-friendly** single-column layout: no tables, no decorative
graphics, all information in plain readable text with real URLs. In the print dialog,
choose **"Save as PDF"** to download.

## Author

**Abdelkhalek Mammeri** — El Bayadh, Algeria
- GitHub: <https://github.com/Ab40D>
- LinkedIn: <https://www.linkedin.com/in/abdelkhalekmammeri/>
- YouTube: <https://www.youtube.com/@abdelkhalekmammeri>
- Email: <abdelkhalekmammeri@gmail.com>
