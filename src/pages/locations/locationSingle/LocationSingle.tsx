import React from 'react';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import { CharacterCard, HeroSection } from '@components';

export const LocationSingle: React.FC = () => {
  return (
    <PageLayout>
      <HeroSection />
      <SectionLayout title={'Characters who live in this location'}>
        <GridLayout>
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
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
    </PageLayout>
  );
};
