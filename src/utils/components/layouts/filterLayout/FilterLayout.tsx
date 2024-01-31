import React from 'react';

import { SectionLayout } from '../sectionLayout/SectionLayout.tsx';

export const FilterLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SectionLayout>
      <label
        htmlFor={'checkbox'}
        className={' self-end md:hidden mb-10 flex items-center justify-center bg-light-accent dark:bg-dark-accent px-[11px] py-[10px] rounded-full'}>
        Filter
      </label>
      <input id={'checkbox'} type={'checkbox'} className={'hidden peer'} />
      <div className={'hidden peer-checked:grid grid-cols-1 md:grid md:grid-cols-4 lg:grid-cols-5 gap-5'}>
        {children}
      </div>
    </SectionLayout>
  );
};