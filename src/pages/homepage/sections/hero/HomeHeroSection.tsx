import { CharacterCard } from '@components';
import React from 'react';

export const HomeHeroSection: React.FC = () => (
  // Todo: soliciă un personaj random
  // Todo: functia de randomizare sa fie scrisa aparte ( universala pentru 1 pers si pentru [] de pers )

  <div className="relative flex h-[100vh] items-center justify-center overflow-hidden rounded-[20px]  ">
    <div
      className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-cover text-white"
      style={{ backgroundImage: 'url(https://rickandmortyapi.com/api/character/avatar/1.jpeg)' }}
    />
    <div className=" absolute bottom-0 left-0 right-0 top-0 h-[100vh] bg-light-primary/40 backdrop-blur-2xl " />
    <h1 className="title relative text-white">Morty’s Girlfriend</h1>
    <div className=" absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-center p-10">
      <CharacterCard />
    </div>
  </div>
);
