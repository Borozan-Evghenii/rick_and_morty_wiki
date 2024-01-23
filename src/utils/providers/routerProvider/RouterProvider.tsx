import React from 'react';

interface RouterProviderProps {
  children: React.ReactNode
}
const RouterProvider: React.FC<RouterProviderProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default RouterProvider;