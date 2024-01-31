import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePageTitle } from '@hooks';

export const HeroSection  :React.FC= () => {
  const path = useLocation();

  const title = usePageTitle(path.pathname);

  return (
    <div className={'z-0 relative h-[50vh] flex items-center justify-center relative overflow-hidden rounded-[20px]  '}>
      <div
        className={'w-full h-full bg-cover absolute left-0 right-0 top-0 bottom-0 text-white'}
        style={{ backgroundImage: 'url(https://rickandmortyapi.com/api/character/avatar/1.jpeg)' }}
      ></div>
      <div className={' h-[100vh] absolute left-0 right-0 top-0 bottom-0 backdrop-blur-2xl bg-light-primary/40 '}></div>
      <h1
        className={'text-white title relative'}
      >{title}</h1>
    </div>
  );
};