# RESUME.md — How this portfolio is built & how to update it
# كيف بُني هذا الموقع وكيف تحدّثه

> دليل كامل بالعربية والإنجليزية — من بنى الموقع، كيف يخدم، وكيف تبدّل أي شيء فيه.
> A complete bilingual (Arabic + English) guide — who built it, how it works, how to change anything.

---

## 1. من بنى هذا الموقع؟ / Who built this website

**العربية:** هذا الموقع بُني لك — يا عبد الخالق — من الصفر بهوية "مهندس يبني أنظمة حقيقية"، مش موقع بورتفوليو عام. المعطيات (التجربة، المشاريع، الشهادات) جاية كلها من الـ CV اللي بعثته. ما تحطّينا والو ما كانش موجود في المعطيات.

**English:** This site was built for you — Abdelkhalek — from scratch with the identity of "an engineer who builds real systems," not a generic developer portfolio. The content (experience, projects, certifications) all comes from the CV you sent. Nothing was invented; only verified facts are on the site.

---

## 2. التقنيات المستعملة / Tech stack

| Layer | Technology | Why |
|---|---|---|
| **UI** | React 18 + TypeScript | Type safety, fast HMR, real components |
| **Build** | Vite | Lightning-fast dev server, tiny production build |
| **Styling** | Tailwind CSS | No CSS files to maintain, design tokens built-in |
| **Fonts** | Inter (body) + Barlow Condensed (headings) + JetBrains Mono (eyebrows/code) | Editorial, engineering feel |
| **Hosting** | Any static host (Vercel / Netlify / GitHub Pages) | Just upload `dist/` after `npm run build` |

**Zero runtime dependencies** beyond React itself.

---

## 3. بنية الملفات / File structure

```
smart-building-dashboard/
├── index.html              ← HTML entry, fonts, meta tags
├── package.json            ← npm scripts & deps
├── vite.config.ts          ← Vite dev/build config
├── tailwind.config.js      ← design tokens (colors, fonts, spacing)
├── tsconfig*.json          ← TypeScript config
├── public/
│   ├── favicon.svg
│   └── images/             ← ⚠ drop profile.jpg here
└── src/
    ├── main.tsx            ← React mount
    ├── App.tsx             ← Section order + sidebar/topbar wiring
    ├── index.css           ← Tailwind + print styles
    ├── data/               ← ⚠ ALL CONTENT LIVES HERE
    │   ├── profile.ts          Name, photo, links, summary
    │   ├── experience.ts       Internships & jobs
    │   ├── education.ts        Degree + final-year project
    │   ├── projects.ts         Engineering projects (GitHub)
    │   ├── videos.ts           YouTube videos
    │   ├── skills.ts           Technical skills (grouped)
    │   ├── certifications.ts   Certificates & training
    │   ├── languages.ts        Arabic / French / English
    │   └── navigation.ts       Sidebar section order
    ├── components/         ← Reusable building blocks
    │   ├── Sidebar.tsx         Black fixed sidebar + mobile drawer
    │   ├── Topbar.tsx          Sticky top bar with Print/Download
    │   ├── ProfilePhoto.tsx    Smart image with monogram fallback
    │   ├── VideoCard.tsx       Privacy-friendly YouTube embed
    │   ├── PrintableCV.tsx     ATS-friendly single-column print view
    │   ├── SectionHeader.tsx   Reusable section title + index
    │   └── icons.tsx           All SVG icons (inline, no library)
    └── sections/           ← One file per page section
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── ProjectsSection.tsx
        ├── VideosSection.tsx
        ├── ExperienceSection.tsx
        ├── EducationSection.tsx
        ├── SkillsSection.tsx
        ├── CertificationsSection.tsx
        └── ContactSection.tsx
```

**القاعدة الذهبية:** أي معلومة على الموقع (اسمك، مشاريعك، شهاداتك…) في ملف من `src/data/`. ما تبدّل في مكونات React، بدّل في `data/`.
**Golden rule:** Any piece of information on the site lives in `src/data/`. Don't edit React components, edit `data/`.

---

## 4. نظام التصميم / Design system

**Color palette** (defined in `tailwind.config.js`):
| Token | Value | Usage |
|---|---|---|
| `ink-900` | `#0A0A0A` | Sidebar background, primary text, CTAs |
| `paper` | `#FFFFFF` | Main content background |
| `paper-200` | `#E8E8E8` | Hairline separators, borders |
| `accent` | `#2563EB` | "MAMMERI" word, active nav, links, hover states |

**Typography**:
- `font-display` (Barlow Condensed) — section headings, big names
- `font-sans` (Inter) — body text
- `font-mono` (JetBrains Mono) — eyebrows, dates, tags

**Layout**:
- Fixed 300px black sidebar on desktop (`md:flex` shows it, below `md` it's a top bar + drawer)
- Main content padded by the sidebar width on desktop
- Container max-width 1200px, padded 24–40px

---

## 5. كيف تضيف مشروع جديد / How to add a new project

### العربية
1. افتح ملف `src/data/projects.ts`
2. أضف عنصر جديد في المصفوفة `projects`، قبل القوس `]`
3. اتبع نفس شكل العناصر الموجودة

### English
1. Open `src/data/projects.ts`
2. Add a new object inside the `projects` array (before the closing `]`)
3. Follow the existing shape

### Template / القالب

```ts
{
  name: 'Your Project Name',
  status: 'completed', // or 'in-progress'
  category: 'Smart Building', // or 'IoT' / 'Computer Vision' / 'Software' / 'Industrial Automation'
  description: 'One-line technical description of what it does.',
  contribution: [
    'First concrete thing you built/designed.',
    'Second concrete thing you built/designed.',
    'Third concrete thing you built/designed.',
  ],
  technologies: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
  github: 'https://github.com/Ab40D/your-repo',
  // live: 'https://your-demo.example.com',  // optional
  // video: 'https://youtube.com/watch?v=...',  // optional
  // featured: true,  // only ONE project should be featured
},
```

### قواعد مهمة / Important rules
- **No fake info** — كل ما تكتب يكون حقيقة موثّقة. Recruiters يقراو بين السطور.
- **Strong verbs** for `contribution` items: Designed, Built, Implemented, Configured, Deployed, Tested, Integrated, Prototyped.
- **`featured: true`** على مشروع واحد فقط. هذا هو اللي يبان كبير في أعلى صفحة Projects.
- **Tags** في `technologies` لازم تكون قصيرة وواضحة (Arduino, ESP32, MQTT, etc.)

---

## 6. كيف تضيف فيديو يوتيوب جديد / How to add a new YouTube video

### العربية
1. افتح `src/data/videos.ts`
2. أضف عنصر جديد في المصفوفة `videos` (الفيديو الأول في القائمة هو الـ featured)
3. خلّي الـ `id` هو الجزء الأخير من رابط يوتيوب

### English
1. Open `src/data/videos.ts`
2. Add a new object in the `videos` array (the first video in the list is the featured one)
3. The `id` is the last part of the YouTube URL

### مثال / Example
رابط YouTube: `https://www.youtube.com/watch?v=qdAkY2eS1vQ`
الـ `id`: `qdAkY2eS1vQ`

```ts
{
  id: 'qdAkY2eS1vQ',
  title: 'Control Smart Lights with ON/OFF Buttons | Home Assistant + Python',
  url: 'https://www.youtube.com/watch?v=qdAkY2eS1vQ',
  duration: '2:57',  // optional
  category: 'Smart Building', // 'Smart Building' | 'IoT' | 'Computer Vision' | 'Tutorial'
  description: 'Short 1–2 sentence summary of what the video shows.',
},
```

### كيفاش يشتغل الـ embed / How the embed works
- الزائر يشوف thumbnail + زر play (ما في حتى iframe يخدم قبل ما يضغط)
- ملي يضغط play، يتحمّل الـ iframe من `youtube-nocookie.com` (خصوصية أكثر)
- ما يخدمش tracking إلا ملي يستعمل الفيديو فعلاً

---

## 7. كيف تزيد تيك توك / How to add TikTok

### العربية
1. افتح `src/data/profile.ts`
2. في قسم `links`، بدّل `tiktok: ''` إلى رابطك الكامل، مثلاً:
   ```ts
   tiktok: 'https://www.tiktok.com/@abdelkhalekmammeri',
   ```
3. وفّض — أيقونة TikTok تبان في الـ sidebar والـ hero والـ contact section.

### English
1. Open `src/data/profile.ts`
2. In the `links` object, change `tiktok: ''` to your full URL, e.g.:
   ```ts
   tiktok: 'https://www.tiktok.com/@abdelkhalekmammeri',
   ```
3. Save — the TikTok icon automatically appears in the sidebar, hero, and contact section.

> **نصيحة:** إذا حبيت تخبّي تيك توك مؤقتاً، سيب الـ string فاضي `tiktok: ''`. الموقع ما يعرض أيقونة تيك توك إذا الرابط فاضي.
> **Tip:** To temporarily hide TikTok, keep the string empty (`tiktok: ''`). The site hides the TikTok icon when the URL is empty.

---

## 8. كيف تضيف صورة البروفايل / How to add your profile photo

### الطريقة 1: ملف محلي (موصى به للإنتاج) / Local file (recommended for production)

1. سمّي صورتك `profile.jpg` (أو `.png` / `.webp`)
2. حطّها في `public/images/`
3. الموقع يقراها من `/images/profile.jpg` تلقائياً — ما تحتاج تبدّل أي كود

### الطريقة 2: رابط URL (أسرع) / Remote URL (fastest)

في `src/data/profile.ts`:
```ts
photo: 'https://your-cdn.example.com/your-photo.jpg',
```

### إذا ما لقيتش الصورة / If the file is missing
الموقع يعرض monogram أنيق (الحروف الأولى من اسمك) بتدرج أسود. ما ينكسر شيء.

---

## 9. كيف تحدّث أقسام أخرى / How to update other sections

| لتحدّث | افتح | ابحث عن |
|---|---|---|
| **الاسم / العنوان / اللينكات** | `src/data/profile.ts` | `name`, `title`, `links` |
| **الـ summary** | `src/data/profile.ts` | `summary.intro / .profile / .closing` |
| **الـ "Now / Currently" band** | `src/data/profile.ts` | `now` (4 items) |
| **التجارب / Internships** | `src/data/experience.ts` | `experiences` array |
| **الدراسة / Education** | `src/data/education.ts` | `education` array (includes final-year project) |
| **المهارات / Skills** | `src/data/skills.ts` | `skillGroups` (8 domain groups) |
| **الشهادات / Certifications** | `src/data/certifications.ts` | `certifications` array |
| **اللغات / Languages** | `src/data/languages.ts` | `languages` array |
| **ترتيب القائمة الجانبية** | `src/data/navigation.ts` | `navSections` (order matters) |

---

## 10. ملاحظات ATS / ATS-friendliness

**العربية:** الموقع فيه زر "Download CV" و "Print" في الأعلى. ملي تضغط، يطلع print dialog فيه تخطيط:
- عمود واحد
- بلا جداول
- نصوص واضحة وقابلة للقراءة
- الروابط الحقيقية ظاهرة كنص (مش داخل صور)

في print dialog، اختار "Save as PDF" — يخدم كـ CV PDF بترفقي ATS.

**English:** The site has "Download CV" and "Print" buttons in the top bar. When you click, the print dialog opens with a layout that is:
- Single column
- No tables
- Plain readable text
- Real links shown as text (not hidden in images)

In the print dialog, choose "Save as PDF" — it works as an ATS-friendly CV PDF.

---

## 11. كيف تنشر الموقع / How to deploy

```bash
npm run build          # → dist/
```

ثم ارفع محتوى `dist/` على:
- **Vercel** (الأسرع): اربط الـ repo على vercel.com، يكشف Vite تلقائياً
- **Netlify**: نفس الشيء
- **GitHub Pages**: `npm install -D gh-pages` ثم `npx gh-pages -d dist`
- أي static host آخر (Cloudflare Pages, Firebase Hosting, etc.)

---

## 12. ملخّص سريع / Quick reference card

| تريد... | روح لـ... |
|---|---|
| تبدّل اسمك أو عنوانك | `src/data/profile.ts` |
| تزيد مشروع جديد | `src/data/projects.ts` |
| تزيد فيديو يوتيوب | `src/data/videos.ts` |
| تفعّل/تخبّي TikTok | `src/data/profile.ts` → `links.tiktok` |
| تبدّل صورة البروفايل | `public/images/profile.jpg` |
| تضيف تاغات مهارات | `src/data/skills.ts` |
| تضيف شهادة جديدة | `src/data/certifications.ts` |
| تبدّل ترتيب القائمة | `src/data/navigation.ts` |

---

**Built with ❤️ for Abdelkhalek Mammeri — Electronics Engineer, Smart Buildings & IIoT.**
**بُني بحب لعبد الخالق مامري — مهندس إلكترونيات، المباني الذكية وإنترنت الأشياء الصناعي.**
