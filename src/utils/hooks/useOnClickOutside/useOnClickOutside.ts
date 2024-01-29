import React from 'react';
import { fixMe } from '../../../../@types';

export const useOnClickOutside = (componentRef: fixMe, callback: () => void) => {

  React.useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    };
  }, [componentRef]);

};