import { CharacterCard } from '@components';
import { useGetAllCharactersQuery } from '@gql';
import { GridLayout, HomeSectionLayout } from '@layouts';
import React from 'react';

export const CharactersSection: React.FC = () => {
  const { data: characters } = useGetAllCharactersQuery();
  return (
    <HomeSectionLayout link="/characters" title="Characters">
      <GridLayout columns="4">
        {characters?.characters?.results?.map((character, index) => {
          if (index < 8) {
            return <CharacterCard key={character?.id} info={character} />;
          }
          return null;
        })}
      </GridLayout>
    </HomeSectionLayout>
  );
};
