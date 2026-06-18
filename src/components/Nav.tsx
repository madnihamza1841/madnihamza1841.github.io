import { Link } from 'react-router-dom';
import { profile } from '../data/content';
import { useTheme } from '../lib/theme';

export default function Nav({ showSections = true }: { showSections?: boolean }) {
  const { isDark, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-bg)_82%,transparent)]">
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid place-items-center w-7 h-7 rounded-lg bg-[var(--color-accent)] text-white text-[13px] font-medium">
            HM
          </span>
          <span className="text-[var(--color-ink)] text-sm font-medium">{profile.name}</span>
        </Link>
        <div className="flex items-center gap-5 text-sm text-[var(--color-muted)]">
          {showSections && (
            <>
              <a href="#work" className="hidden sm:inline hover:text-[var(--color-ink)] transition-colors">Work</a>
              <a href="#experience" className="hidden sm:inline hover:text-[var(--color-ink)] transition-colors">Experience</a>
              <a href="#skills" className="hidden sm:inline hover:text-[var(--color-ink)] transition-colors">Skills</a>
            </>
          )}
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[var(--color-accent)] text-[var(--color-accent-soft)] px-3 py-1.5 hover:bg-[var(--color-accent)] hover:text-white transition-colors"
          >
            Résumé
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle colour theme"
            className="grid place-items-center w-8 h-8 rounded-lg hover:bg-[var(--color-surface)] transition-colors"
          >
            <i className={`ti ${isDark ? 'ti-moon' : 'ti-sun'} text-lg text-[var(--color-faint)]`} />
          </button>
        </div>
      </nav>
    </header>
  );
}
