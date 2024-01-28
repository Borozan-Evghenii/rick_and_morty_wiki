import React from 'react';
import { GridLayout, SectionLayout } from '../../../../utils/components/layouts';
import { CharacterCard } from '../../../../utils/components';


export const CharactersSection :React.FC= () => {
  return (
    <SectionLayout title={'Characters'}>
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
    </SectionLayout>
  );
};
