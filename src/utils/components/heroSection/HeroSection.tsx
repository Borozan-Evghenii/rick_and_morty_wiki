import { usePageTitle } from '@hooks';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const path = useLocation();

  const title = usePageTitle(path.pathname);

  return (
    <div className="relative relative z-0 flex h-[50vh] items-center justify-center overflow-hidden rounded-[20px]  ">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-cover text-white"
        style={{ backgroundImage: 'url(https://rickandmortyapi.com/api/character/avatar/1.jpeg)' }}
      />
      <div className=" absolute bottom-0 left-0 right-0 top-0 h-[100vh] bg-light-primary/40 backdrop-blur-2xl " />
      <h1 className="title relative text-white">{title}</h1>
    </div>
  );
};
