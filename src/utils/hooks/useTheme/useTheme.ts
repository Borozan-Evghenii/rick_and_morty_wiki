import React from 'react';
import { useLocaleStorage } from '../useLocaleStorage/useLocaleStorage.ts';

const themeKey = 'isDarkMode'
export const useTheme = () => {
  const localeStore = useLocaleStorage()
  const [isDark, setIsDark] =React.useState<boolean>(false)

  React.useEffect(()=> {
    const isStoredDark = localeStore.getLocaleStorage(themeKey)
    setIsDark(isStoredDark)
    window.document.documentElement.classList.toggle('dark')
  },[])

  React.useEffect(() => {
    localeStore.setLocaleStorage(themeKey, isDark)
  },[isDark])

  const toggleTheme =() => {
    setIsDark(prev => !prev)
    window.document.documentElement.classList.toggle('dark')
  }

  return {
    isDark,
    toggleTheme
  }
}