import { CharacterCard } from '@components';
import { GridLayout, HomeSectionLayout } from '@layouts';
import React from 'react';

export const CharactersSection: React.FC = () => (
  <HomeSectionLayout link="/characters" title="Characters">
    <GridLayout columns="4">
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
