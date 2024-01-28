import React from 'react';
import { Button } from '../../../../utils/UI';
import { FiArrowUpRight } from 'react-icons/fi';
import { CharacterCard } from '../../../../utils/components';


export const CharactersSection :React.FC= () => {
  return (
    <div className={'app-container'}>
      <div className={'flex items-center justify-between'}>
        <h2 className={'title3'}>Characters</h2>
        <Button icon={<FiArrowUpRight />}>View all</Button>
      </div>
      <div className={'grid grid-cols-4 gap-5'}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </div>
  );
};
