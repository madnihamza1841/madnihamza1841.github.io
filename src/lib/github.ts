import { useEffect, useState } from 'react';
import { profile, excludeRepos } from '../data/content';

export interface Repo {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  url: string;
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
