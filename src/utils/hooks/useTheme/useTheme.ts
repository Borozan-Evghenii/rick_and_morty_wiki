import React from 'react';
import { useLocaleStorage } from '../useLocaleStorage/useLocaleStorage.ts';

const themeKey = 'isDarkMode'
export const useTheme = () => {
  const localeStore = useLocaleStorage()
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    const isStoredDark = localeStore.getLocaleStorage(themeKey);
    return isStoredDark !== null ? isStoredDark : false;
  });

  React.useEffect(() => {
    if (isDark) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
    localeStore.setLocaleStorage(themeKey, isDark);
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  }

  return {
    isDark,
    toggleTheme
  }
}