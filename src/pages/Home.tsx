import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { profile, experience, projects, skills, coreSkills, education, certifications, letters, inlineLinks } from '../data/content';
import { useRepos } from '../lib/github';

// Renders bullet text, turning known phrases (e.g. "OpenEdX") into links.
function linkify(text: string) {
  const terms = Object.keys(inlineLinks);
  if (terms.length === 0) return text;
  const re = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  return text.split(re).map((part, i) =>
    inlineLinks[part] ? (
      <a
        key={i}
        href={inlineLinks[part]}
        target="_blank"
        rel="noreferrer"
        className="text-[var(--color-accent-soft)] hover:text-[var(--color-ink)] underline underline-offset-2"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

export default function Home() {
  const repos = useRepos();

  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="pt-24 pb-20 sm:pt-28 sm:pb-24 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">
          <div>
          <p className="text-[var(--color-accent-soft)] text-xs tracking-[0.16em] uppercase mb-4">
            {profile.title}
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.1] max-w-3xl text-[var(--color-ink)]">
            {profile.tagline}
          </h1>
          <p className="mt-6 text-[var(--color-muted)] text-lg leading-relaxed max-w-2xl">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-lg bg-[var(--color-accent)] text-white text-sm px-5 py-2.5 hover:opacity-90 transition-opacity">
              View my work
            </a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="rounded-lg border border-[var(--color-line)] text-[var(--color-ink)] text-sm px-5 py-2.5 inline-flex items-center gap-2 hover:border-[var(--color-accent)] transition-colors">
              <i className="ti ti-download text-base" />
              Download CV
            </a>
            <div className="flex items-center gap-4 ml-2 text-xl text-[var(--color-faint)]">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-ink)] transition-colors"><i className="ti ti-brand-github" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-ink)] transition-colors"><i className="ti ti-brand-linkedin" /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-[var(--color-ink)] transition-colors"><i className="ti ti-mail" /></a>
            </div>
          </div>
          <p className="mt-7 text-[var(--color-faint)] text-sm flex items-center gap-1.5">
            <i className="ti ti-map-pin text-base" />
            {profile.location} · open to roles
          </p>
          </div>

          <div className="order-first lg:order-last shrink-0">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] grid place-items-center">
              <i className="ti ti-user text-5xl text-[var(--color-faint)]" aria-hidden="true" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 border-t border-[var(--color-line)]">
          <h2 className="text-[var(--color-faint)] text-xs tracking-[0.14em] uppercase mb-10">Experience</h2>
          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.company} className="grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-8">
                <div className="text-sm text-[var(--color-faint)]">
                  <p>{job.period}</p>
                  <p className="mt-0.5">{job.location}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[var(--color-ink)]">
                    {job.role} ·{' '}
                    {job.link ? (
                      <a href={job.link} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent-soft)] transition-colors inline-flex items-center gap-1">
                        {job.company}<i className="ti ti-external-link text-sm" />
                      </a>
                    ) : (
                      job.company
                    )}
                    {job.type && <span className="text-[var(--color-faint)] font-normal"> · {job.type}</span>}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {job.points.map((pt, i) => (
                      <li key={i} className="text-[var(--color-muted)] text-[15px] leading-relaxed flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                        <span>{linkify(pt)}</span>
                      </li>
                    ))}
                  </ul>
                  {job.subs && (
                    <div className="mt-5 space-y-4 border-l border-[var(--color-line)] pl-5">
                      {job.subs.map((s) => (
                        <div key={s.name}>
                          <p className="text-[15px] font-medium text-[var(--color-ink)]">
                            {s.link ? (
                              <a href={s.link} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent-soft)] transition-colors inline-flex items-center gap-1">
                                {s.name}<i className="ti ti-external-link text-xs" />
                              </a>
                            ) : (
                              s.name
                            )}
                            {s.role && <span className="text-[var(--color-faint)] font-normal"> · {s.role}</span>}
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {s.points.map((pt, i) => (
                              <li key={i} className="text-[var(--color-muted)] text-sm leading-relaxed flex gap-3">
                                <span className="mt-[7px] w-1 h-1 rounded-full bg-[var(--color-faint)] shrink-0" />
                                <span>{linkify(pt)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-16 border-t border-[var(--color-line)]">
          <h2 className="text-[var(--color-faint)] text-xs tracking-[0.14em] uppercase mb-10">Education</h2>
          <div className="space-y-8">
            {education.map((e) => (
              <div key={e.school} className="grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-8">
                <div className="text-sm text-[var(--color-faint)]">
                  <p>{e.period}</p>
                  <p className="mt-0.5">{e.location}</p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-[var(--color-ink)]">{e.degree}</h3>
                  <p className="text-sm text-[var(--color-muted)] mt-0.5">{e.school}</p>
                  <p className="text-sm text-[var(--color-faint)] mt-1.5">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 border-t border-[var(--color-line)]">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-[var(--color-faint)] text-xs tracking-[0.14em] uppercase">Projects</h2>
            <Link to="/work" className="text-sm text-[var(--color-accent-soft)] hover:text-[var(--color-ink)] transition-colors inline-flex items-center gap-1">
              All projects <i className="ti ti-arrow-right" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((p) => {
              const inner = (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <i className={`ti ti-${p.icon} text-2xl`} style={{ color: p.accent }} />
                    <i className={`ti ti-${p.link ? 'arrow-up-right' : 'arrow-right'} text-[var(--color-faint)] group-hover:text-[var(--color-ink)] transition-colors`} />
                  </div>
                  <h3 className="text-base font-medium text-[var(--color-ink)]">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-muted)] leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md" style={{ color: p.accent, background: `${p.accent}22` }}>{t}</span>
                    ))}
                  </div>
                </>
              );
              const cls = 'group rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-accent)] transition-colors block';
              return p.link ? (
                <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
              ) : (
                <Link key={p.name} to="/work" className={cls}>{inner}</Link>
              );
            })}
          </div>

          {repos.length > 0 && (
            <>
              <div className="mt-12 mb-4 flex items-center justify-between">
                <p className="text-[var(--color-faint)] text-xs tracking-[0.14em] uppercase">All GitHub repositories</p>
                <span className="text-xs text-[var(--color-faint)]">{repos.length} repos</span>
              </div>
              <div className="max-h-[26rem] overflow-y-auto pr-2 repo-scroll rounded-lg">
                <div className="grid sm:grid-cols-3 gap-3">
                  {repos.map((r) => (
                    <a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="group rounded-lg border border-[var(--color-line)] p-4 hover:border-[var(--color-accent)] transition-colors">
                      <div className="flex items-center justify-between">
                        <i className="ti ti-brand-github text-lg text-[var(--color-faint)]" />
                        {r.stars > 0 && (
                          <span className="text-xs text-[var(--color-faint)] inline-flex items-center gap-1"><i className="ti ti-star" />{r.stars}</span>
                        )}
                      </div>
                      <h4 className="mt-2 text-sm font-medium text-[var(--color-ink)] truncate">{r.name}</h4>
                      <p className="mt-1 text-xs text-[var(--color-muted)] leading-snug line-clamp-2">{r.description || 'No description'}</p>
                      {r.language && <p className="mt-2 text-xs text-[var(--color-faint)]">{r.language}</p>}
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 border-t border-[var(--color-line)]">
          <h2 className="text-[var(--color-faint)] text-xs tracking-[0.14em] uppercase mb-8">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
            {coreSkills.map((c) => (
              <div key={c.label} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 flex flex-col gap-2">
                <i className={`ti ti-${c.icon} text-xl text-[var(--color-accent-soft)]`} />
                <span className="text-[13px] font-medium text-[var(--color-ink)] leading-snug">{c.label}</span>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="text-sm font-medium text-[var(--color-ink)] mb-3">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="text-[13px] text-[var(--color-muted)] border border-[var(--color-line)] rounded-md px-2.5 py-1">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-16 border-t border-[var(--color-line)]">
          <h2 className="text-[var(--color-faint)] text-xs tracking-[0.14em] uppercase mb-10">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden flex flex-col">
                <a
                  href={`${import.meta.env.BASE_URL}${c.file}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block bg-white p-2"
                  aria-label={`Open ${c.name} certificate`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${c.preview}`}
                    alt={`${c.name} certificate`}
                    className="w-full aspect-[4/3] object-contain"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-black/0 group-hover:bg-black/40 transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 text-white text-sm bg-[var(--color-accent)] px-3 py-1.5 rounded-lg">
                      <i className="ti ti-eye" /> View
                    </span>
                  </span>
                </a>
                <div className="p-4 flex items-center justify-between gap-3 border-t border-[var(--color-line)]">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[var(--color-ink)] truncate" title={c.name}>{c.name}</p>
                    <p className="text-xs text-[var(--color-faint)] truncate">{c.issuer}</p>
                  </div>
                  <a
                    href={`${import.meta.env.BASE_URL}${c.file}`}
                    download
                    className="shrink-0 grid place-items-center w-9 h-9 rounded-lg border border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors"
                    aria-label={`Download ${c.name} certificate`}
                  >
                    <i className="ti ti-download text-base" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience letters */}
        <section id="letters" className="py-16 border-t border-[var(--color-line)]">
          <h2 className="text-[var(--color-faint)] text-xs tracking-[0.14em] uppercase mb-10">Experience letters</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {letters.map((l) => (
              <div key={l.org} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden flex flex-col">
                <a
                  href={`${import.meta.env.BASE_URL}${l.file}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block bg-white"
                  aria-label={`Open ${l.org} experience letter`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${l.preview}`}
                    alt={`${l.org} experience letter, first page`}
                    className="w-full aspect-[3/4] object-cover object-top border-b border-[var(--color-line)]"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-black/0 group-hover:bg-black/40 transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 text-white text-sm bg-[var(--color-accent)] px-3 py-1.5 rounded-lg">
                      <i className="ti ti-eye" /> View
                    </span>
                  </span>
                </a>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[var(--color-ink)] truncate">{l.org}</p>
                    <p className="text-xs text-[var(--color-faint)] truncate">{l.role}</p>
                  </div>
                  <a
                    href={`${import.meta.env.BASE_URL}${l.file}`}
                    download
                    className="shrink-0 grid place-items-center w-9 h-9 rounded-lg border border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors"
                    aria-label={`Download ${l.org} experience letter`}
                  >
                    <i className="ti ti-download text-base" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Contact */}
      <footer id="contact" className="bg-[var(--color-surface)] border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-2xl font-medium text-[var(--color-ink)]">Let's build something together.</h2>
          <p className="mt-3 text-[var(--color-muted)]">{profile.email}</p>
          <a href={`mailto:${profile.email}`} className="mt-6 inline-block rounded-lg bg-[var(--color-accent)] text-white text-sm px-6 py-2.5 hover:opacity-90 transition-opacity">
            Get in touch
          </a>
          <div className="mt-8 flex items-center justify-center gap-5 text-xl text-[var(--color-faint)]">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-ink)] transition-colors"><i className="ti ti-brand-github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-ink)] transition-colors"><i className="ti ti-brand-linkedin" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-[var(--color-ink)] transition-colors"><i className="ti ti-mail" /></a>
          </div>
          <p className="mt-10 text-xs text-[var(--color-faint)]">© {new Date().getFullYear()} {profile.name} · Built with React</p>
        </div>
      </footer>
    </>
  );
}
