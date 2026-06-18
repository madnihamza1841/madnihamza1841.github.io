import { useEffect, useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(
    () => !document.documentElement.classList.contains('light')
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    root.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((d) => !d) };
}
