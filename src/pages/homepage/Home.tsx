import React from 'react';
import { HeroSection } from './sections';
import Button from '../../utils/components/common/button/Button.tsx';

export const Home: React.FC = () => {
  return (
    <div className={'bg-light-background dark:bg-dark-background p-[10px]'}>
      <HeroSection />
      <Button>Sent request</Button>
    </div>
  );
};
