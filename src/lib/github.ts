import { useEffect, useState } from 'react';
import { profile, excludeRepos } from '../data/content';

export interface Repo {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  url: string;
}

export interface ContribDay {
  date: string;
  count: number;
  level: number;
}

// Contribution calendar from a free, no-auth proxy, covering a trailing window
// of `years`. Falls back to empty on error.
export function useContributions(years = 3): { days: ContribDay[]; total: number } {
  const [data, setData] = useState<{ days: ContribDay[]; total: number }>({ days: [], total: 0 });

  useEffect(() => {
    let cancelled = false;
    const now = new Date();
    const yParams: string[] = [];
    for (let y = now.getFullYear() - years; y <= now.getFullYear(); y++) yParams.push(`y=${y}`);
    const nowStr = now.toISOString().slice(0, 10);
    const cutoff = new Date(now);
    cutoff.setFullYear(cutoff.getFullYear() - years);
    const cutoffStr = cutoff.toISOString().slice(0, 10);

    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?${yParams.join('&')}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d: any) => {
        if (cancelled) return;
        const days: ContribDay[] = (d.contributions || [])
          .filter((c: any) => c.date >= cutoffStr && c.date <= nowStr)
          .map((c: any) => ({
            date: c.date,
            count: c.count,
            level: typeof c.level === 'number' ? c.level : 0,
          }))
          // The proxy returns multi-year data in descending year blocks; sort
          // chronologically so the calendar reads oldest-left to newest-right.
          .sort((a: ContribDay, b: ContribDay) => (a.date < b.date ? -1 : 1));
        setData({ days, total: days.reduce((s, c) => s + c.count, 0) });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [years]);

  return data;
}

// Fetched client-side so the list stays fresh on every visit. Returns every
// public, non-fork repo (most-recently-updated first); featured ones are excluded.
export function useRepos(): Repo[] {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: any[]) => {
        if (cancelled) return;
        const cleaned = data
          .filter((r) => !r.fork && !r.archived && !excludeRepos.has(r.name))
          .map((r) => ({
            name: r.name,
            description: r.description ?? '',
            language: r.language,
            stars: r.stargazers_count,
            url: r.html_url,
          }));
        setRepos(cleaned);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return repos;
}
