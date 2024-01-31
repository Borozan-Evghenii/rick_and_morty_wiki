import React from 'react';

import { SectionLayout } from '../sectionLayout/SectionLayout.tsx';

export const FilterLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SectionLayout>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label
      className=" mb-10 flex items-center justify-center self-end rounded-full bg-light-accent px-[11px] py-[10px] dark:bg-dark-accent md:hidden"
      htmlFor="checkbox"
    >
      Filter
    </label>
    <input className="peer hidden" id="checkbox" type="checkbox" />
    <div className="hidden grid-cols-1 gap-5 peer-checked:grid md:grid md:grid-cols-4 lg:grid-cols-5">
      {children}
    </div>
  </SectionLayout>
);
