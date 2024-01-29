import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode
  columns?: string
}


export const GridLayout :React.FC<GridLayoutProps>= ({columns, children}) => {
  const col = columns? `lg:grid-cols-${columns}` : 'lg:grid-cols-4'

  return (
    <div className={`grid  grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 ${col} gap-5`}>
      {children}
    </div>
  );
}