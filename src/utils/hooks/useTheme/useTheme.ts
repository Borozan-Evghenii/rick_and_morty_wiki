import React from 'react';
import { useLocaleStorage } from '../useLocaleStorage/useLocaleStorage.ts';

const themeKey = 'isDarkMode'
export const useTheme = () => {
  const localeStore = useLocaleStorage()
  const [isDark, setIsDark] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    const isStoredDark = localeStore.getLocaleStorage(themeKey)
    if (!isStoredDark) {
      localeStore.setLocaleStorage(themeKey, isDark);
    } else {
      console.log(isStoredDark);
      isStoredDark ? window.document.documentElement.classList.add('dark') : '';
    }
  },[])

  const toggleTheme =() => {
    setIsDark(prev => !prev)
    localeStore.setLocaleStorage(themeKey, isDark);
    if (isDark) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
  }

  return {
    isDark,
    toggleTheme
  }
}