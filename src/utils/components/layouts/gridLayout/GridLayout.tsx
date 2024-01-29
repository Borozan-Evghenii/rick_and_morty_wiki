import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode
  columns?: string
}


export const GridLayout :React.FC<GridLayoutProps>= ({columns, children}) => {
  const col = columns? `grid-cols-${columns}` : 'grid-cols-4'

  return (
    <div className={`grid ${col} gap-5`}>
      {children}
    </div>
  );
}