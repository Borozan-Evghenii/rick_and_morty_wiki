import React from 'react';
import { CharacterCard } from '../../../../utils/components';

export const HomeHeroSection : React.FC= () => {
  
  //Todo: soliciă un personaj random
  //Todo: functia de randomizare sa fie scrisa aparte ( universala pentru 1 pers si pentru [] de pers )
  
  return (
    <div className={'h-[100vh] flex items-center justify-center relative overflow-hidden rounded-[20px]  '}>
      <div
        className={'w-full h-full bg-cover absolute left-0 right-0 top-0 bottom-0 text-white'}
        style={{ backgroundImage: 'url(https://rickandmortyapi.com/api/character/avatar/1.jpeg)' }}
      >
      </div>
      <div
        className={' w-[100vw] h-[100vh] absolute left-0 right-0 top-0 bottom-0 backdrop-blur-2xl bg-light-primary/40 '}>

      </div>

      <h1
        className={'text-white title text-center px-[20px] relative md:text-[150px]'}
      >Morty’s Girlfriend</h1>
      <div className={'absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'}>
        <CharacterCard/>
      </div>
    </div>
  );
};