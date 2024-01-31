import React from 'react';

export const SectionLayout: React.FC<{ children: React.ReactNode; title?: string }> = ({
  children,
  title
}) => (
  <section className="mt-10 px-2.5 ">
    {title && (
      <h4 className=" title4 sm:title3 mb-5 text-light-primary dark:text-dark-primary">{title}</h4>
    )}
    {children}
  </section>
);
