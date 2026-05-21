'use client';

import { useEffect, useState } from 'react';

const ThemeToggle = () => {

  const [theme, setTheme] = useState('light');

  
  useEffect(() => {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
    }

  }, []);

 
  useEffect(() => {

    document.documentElement.setAttribute(
      'data-theme',
      theme
    );

    localStorage.setItem('theme', theme);

  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev =>
      prev === 'light' ? 'dark' : 'light'
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm btn-outline"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;