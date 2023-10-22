'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoon, BsMoonStarsFill, BsSun } from 'react-icons/bs';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button className="fixed z-40 bottom-5 right-5 dark:bg-gray-900 dark:text-yellow-400 bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex justify-center items-center">
      {theme === 'light' ? (
        <BsMoonStarsFill onClick={() => setTheme('dark')} size={27} />
      ) : (
        <BsFillSunFill onClick={() => setTheme('light')} size={27} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
