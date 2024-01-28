import React from 'react';
import { FooterInput } from '../../UI';

export const Footer :React.FC= () => {
  return (
    <footer className={'bg-light-background dark:bg-dark-background p-[20px] h-[90vh]'}>
      <div className={'app-container flex items-center justify-center bg-light-thirty dark:bg-dark-thirty rounded-[20px] h-full'}>
        <h2 className={'title2 text-light-primary dark:text-dark-primary max-w-[820px] text-center '}>Say Hello! or  rate project</h2>
        <FooterInput/>
      </div>
    </footer>
  );
};