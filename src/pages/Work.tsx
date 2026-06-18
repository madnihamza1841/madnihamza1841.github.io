import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { projects, studies } from '../data/content';

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav showSections={false} />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <Link to="/" className="text-sm text-[var(--color-accent-soft)] hover:text-[var(--color-ink)] inline-flex items-center gap-1.5 mb-10">
          <i className="ti ti-arrow-left" /> Back home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--color-ink)]">Selected work</h1>
        <p className="mt-4 text-[var(--color-muted)] text-lg">A closer look at the projects I'm proudest of.</p>

        <div className="mt-14 space-y-14">
          {projects.map((p) => {
            const s = studies[p.name];
            return (
              <article key={p.name} className="border-t border-[var(--color-line)] pt-10">
                <div className="flex items-center gap-3">
                  <i className={`ti ti-${p.icon} text-2xl`} style={{ color: p.accent }} />
                  <h2 className="text-xl font-medium text-[var(--color-ink)]">{p.name}</h2>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="ml-auto text-sm text-[var(--color-accent-soft)] hover:text-[var(--color-ink)] inline-flex items-center gap-1">
                      View <i className="ti ti-arrow-up-right" />
                    </a>
                  )}
                </div>
                <p className="mt-1 text-sm text-[var(--color-faint)]">{s?.role}</p>
                <p className="mt-4 text-[var(--color-muted)] leading-relaxed">{s?.context}</p>
                <ul className="mt-4 space-y-2">
                  {s?.did.map((d, i) => (
                    <li key={i} className="text-[15px] text-[var(--color-muted)] leading-relaxed flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.accent }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[15px] text-[var(--color-ink)] leading-relaxed">
                  <span className="text-[var(--color-faint)]">Impact — </span>
                  {s?.impact}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md" style={{ color: p.accent, background: `${p.accent}22` }}>{t}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}
