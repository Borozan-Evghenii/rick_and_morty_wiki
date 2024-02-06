import React from 'react';
import { useLocation } from 'react-router';

export const useScrollTop = () => {
  const { pathname } = useLocation();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
