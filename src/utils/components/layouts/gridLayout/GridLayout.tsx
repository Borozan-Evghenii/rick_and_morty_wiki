import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode
  columns?: string
}


export const GridLayout :React.FC<GridLayoutProps>= ({columns, children}) => {
  return (
    <div className={`grid grid-cols-${columns?columns:'4'} gap-5`}>
      {children}
    </div>
  );
}