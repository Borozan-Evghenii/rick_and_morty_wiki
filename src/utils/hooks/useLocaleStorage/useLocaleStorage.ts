import type { FixMe } from '../../../../@types';

export const useLocaleStorage = () => {
  const getLocaleStorage = (key: string): FixMe => {
    const items = window.localStorage.getItem(key);
    if (items) {
      return JSON.parse(items);
    }
    return null;
  };

  const setLocaleStorage = <T>(key: string, value: T) => {
    const stringValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringValue);
  };

  return { getLocaleStorage, setLocaleStorage };
};
