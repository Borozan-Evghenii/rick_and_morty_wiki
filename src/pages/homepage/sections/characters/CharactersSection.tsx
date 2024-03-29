import { CharacterCard } from '@components';
import { useGetAllCharactersQuery } from '@gql';
import { GridLayout, HomeSectionLayout } from '@layouts';
import React from 'react';

export const CharactersSection: React.FC = () => {
  const characters = useGetAllCharactersQuery();
  return (
    <HomeSectionLayout link="/characters" title="Characters">
      <GridLayout columns="4">
        {characters?.data?.characters.results?.map((character, index) => {
          if (index < 8) {
            return <CharacterCard key={character.id} index={index} info={character} />;
          }
          return null;
        })}
      </GridLayout>
    </HomeSectionLayout>
  );
};
