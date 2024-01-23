import React from 'react';
import RouterProvider from './routerProvider/RouterProvider.tsx';

interface AppProviderProps {
  children: React.ReactNode
}

const AppProvider :React.FC<AppProviderProps> = ({children}) => {
  return (
    <RouterProvider>
      {children}
    </RouterProvider>
  );
};

export default AppProvider;