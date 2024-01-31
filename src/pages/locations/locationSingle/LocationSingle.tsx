import { CharacterCard, HeroSection } from '@components';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import React from 'react';

export const LocationSingle: React.FC = () => (
  <PageLayout>
    <HeroSection />
    <SectionLayout title="Characters who live in this location">
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
