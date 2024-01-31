import React from 'react';

import type { FixMe } from '../../../../@types';
import { useLocaleStorage } from '../useLocaleStorage/useLocaleStorage.ts';

const themeKey = 'isDarkMode';
export const useTheme = () => {
  const localeStore = useLocaleStorage();
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const isStoredDark: FixMe = localeStore.getLocaleStorage(themeKey);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return isStoredDark !== null ? isStoredDark : false;
  });

  React.useEffect(() => {
    if (isDark) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
    localeStore.setLocaleStorage(themeKey, isDark);
  }, [localeStore, isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return {
    isDark,
    toggleTheme
  };
};
