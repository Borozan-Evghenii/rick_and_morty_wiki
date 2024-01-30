import React from 'react';

export const useOnClickOutside = (callback: () => void) => {
  const componentRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as HTMLDivElement)) {
        callback();
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    };
  }, [callback]);

  return { componentRef };
};