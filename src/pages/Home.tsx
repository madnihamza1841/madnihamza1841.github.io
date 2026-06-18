import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { profile, experience, projects, skills, coreSkills, education, languages } from '../data/content';
import { useRepos } from '../lib/github';

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
            <a href="#work" className="rounded-lg bg-[var(--color-accent)] text-white text-sm px-5 py-2.5 hover:opacity-90 transition-opacity">
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
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {job.points.map((pt, i) => (
                      <li key={i} className="text-[var(--color-muted)] text-[15px] leading-relaxed flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="py-16 border-t border-[var(--color-line)]">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-[var(--color-faint)] text-xs tracking-[0.14em] uppercase">Selected work</h2>
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
          <p className="mt-8 text-sm text-[var(--color-faint)]">Languages: {languages.join(' · ')}</p>
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
