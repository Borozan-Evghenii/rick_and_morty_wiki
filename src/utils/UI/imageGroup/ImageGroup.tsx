import type { CharacterCardFragmentFragment } from '@gql';
import React from 'react';

interface ImageGroupProps {
  charactersData: readonly CharacterCardFragmentFragment[];
}

export const ImageGroup: React.FC<ImageGroupProps> = ({ charactersData }) => (
  <div className="flex max-w-full pr-3 ">
    {/* eslint-disable-next-line array-callback-return,consistent-return */}
    {charactersData?.map((character, index) => {
      if (index < 5) {
        return (
          <div key={character.id} className=" mr-[-10px] h-10 w-10 overflow-hidden rounded-full">
            <img alt={character.name} src={character.image} />
          </div>
        );
      }
    })}
  </div>
);
