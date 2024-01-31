import { FooterInput } from '@UI';
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="mt-10 h-[90vh] bg-light-background p-[20px] dark:bg-dark-background">
    <div className="app-container flex h-full items-center justify-center rounded-[20px] bg-light-thirty p-5 dark:bg-dark-thirty">
      <h2 className="title2 max-w-[820px] text-center text-light-primary dark:text-dark-primary ">
        Say Hello! or rate project
      </h2>
      <FooterInput />
    </div>
  </footer>
);
