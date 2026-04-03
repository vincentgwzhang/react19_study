'use client';

import { useState } from 'react';

export function SimpleThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-custom-surface text-foreground hover:bg-custom-define-a-color transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}