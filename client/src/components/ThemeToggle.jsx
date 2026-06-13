import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  return localStorage.getItem('anaya_theme') || 'light';
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('anaya_theme', theme);
  }, [theme, isDark]);

  return (
    <button
      type="button"
      className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-silver bg-white text-navy hover:bg-platinum dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
