import React from 'react';

export const SectionLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className={'mt-[40px]'}>
      {children}
    </section>
  );
};