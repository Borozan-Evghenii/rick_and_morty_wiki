import { CharacterCard } from '@components';
import { useGetCharacterByIdQuery } from '@gql';
import React from 'react';

const randomId = Math.floor(Math.random() * 800).toString();
export const HomeHeroSection: React.FC = () => {
  const characterResponse = useGetCharacterByIdQuery({
    variables: {
      ids: [randomId]
    }
  });

  console.log(randomId);

  const character = characterResponse.data?.charactersByIds[0];

  return (
    <div className="relative flex h-[100vh] items-center justify-center overflow-hidden rounded-[20px]  ">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full animate-pulse bg-cover text-white"
        style={{ backgroundImage: `url(${character?.image})` }}
      />
      <div className=" absolute bottom-0 left-0 right-0 top-0 h-[100vh] bg-light-primary/40 backdrop-blur-2xl " />
      {characterResponse.data && <h1 className="title relative text-white">{character?.name}</h1>}
      <div className=" absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-center p-10">
        {characterResponse.data && <CharacterCard info={character!} />}
      </div>
    </div>
  );
};
