import React from 'react';

export const PageLayout :React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <main className={'p-2.5'}>
      {children}
    </main>
  );
};