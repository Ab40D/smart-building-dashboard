import { profile } from '../data/profile'
import { experiences } from '../data/experience'
import { education } from '../data/education'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import { certifications } from '../data/certifications'
import { languages } from '../data/languages'

/**
 * ATS-friendly printable CV.
 * - Single column, no tables, no decorative graphics.
 * - Standard readable text only.
 * - All links are real text URLs (not hidden inside images).
 */
export function PrintableCV() {
  const featured = projects.find((p) => p.featured)

  return (
    <article className="print-only print-page" aria-label="Printable CV">
      <header>
        <h1>{profile.name}</h1>
        <p>
          {profile.title} — {profile.tagline}
        </p>
        <p>
          {profile.location} · {profile.phone} · {profile.email}
        </p>
        <p>
          LinkedIn: {profile.links.linkedin} · GitHub: {profile.links.githubOrg} · YouTube:{' '}
          {profile.links.youtube}
        </p>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>{profile.summary.intro}</p>
        <p>{profile.summary.profile}</p>
        <p>{profile.summary.closing}</p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        {skillGroups.map((g) => (
          <p key={g.domain}>
            <strong>{g.domain}:</strong> {g.items.join(', ')}.
          </p>
        ))}
      </section>

      <section>
        <h2>Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i}>
            <h3>
              {exp.role} — {exp.company}
            </h3>
            <p>
              {exp.location} · {exp.start} — {exp.end} · {exp.type === 'internship' ? 'Internship' : 'Work'}
            </p>
            <ul>
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {education.map((edu, i) => (
          <div key={i}>
            <h3>
              {edu.degree} — {edu.specialization}
            </h3>
            <p>
              {edu.institution} · {edu.location} · {edu.start} — {edu.end}
            </p>
            {edu.finalProject && (
              <p>
                Final-year project: <em>{edu.finalProject.title}</em> — Grade{' '}
                {edu.finalProject.grade}.
              </p>
            )}
            {edu.notes?.map((n, j) => (
              <p key={j}>{n}</p>
            ))}
          </div>
        ))}
      </section>

      <section>
        <h2>Projects</h2>
        {featured && (
          <div>
            <h3>
              {featured.name} {featured.status === 'completed' ? '' : '(in progress)'} — Featured
            </h3>
            <p>{featured.description}</p>
            <ul>
              {featured.contribution.map((c, j) => (
                <li key={j}>{c}</li>
              ))}
            </ul>
            <p>Technologies: {featured.technologies.join(', ')}.</p>
            {featured.github && <p>Code: {featured.github}</p>}
          </div>
        )}
        {projects
          .filter((p) => !p.featured)
          .map((p, i) => (
            <div key={i}>
              <h3>
                {p.name} {p.status === 'completed' ? '' : '(in progress)'}
              </h3>
              <p>{p.description}</p>
              <ul>
                {p.contribution.slice(0, 4).map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
              <p>Technologies: {p.technologies.join(', ')}.</p>
              {p.github && <p>Code: {p.github}</p>}
            </div>
          ))}
      </section>

      <section>
        <h2>Certifications &amp; Training</h2>
        <ul>
          {certifications.map((c, i) => (
            <li key={i}>
              {c.name} — {c.issuer} — {c.kind} ({c.status}).
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Languages</h2>
        <ul>
          {languages.map((l) => (
            <li key={l.name}>
              {l.name} — {l.level}.
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
