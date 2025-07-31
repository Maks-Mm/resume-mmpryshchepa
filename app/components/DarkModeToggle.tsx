// app/components/DarkModeToggle.tsx
'use client';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setEnabled(true);
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setEnabled(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setEnabled(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-800 rounded text-black dark:text-white"
    >
      {enabled ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
