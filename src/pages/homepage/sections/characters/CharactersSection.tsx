import React from 'react';
import { GridLayout, HomeSectionLayout } from '@layouts';
import { CharacterCard } from '@components';


export const CharactersSection :React.FC= () => {
  return (
    <HomeSectionLayout link={'/characters'} title={'Characters'}>
      <GridLayout columns={'4'}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </GridLayout>
    </HomeSectionLayout>
  );
};
