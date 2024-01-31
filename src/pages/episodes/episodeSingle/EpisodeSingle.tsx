import { CharacterCard, HeroSection } from '@components';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import React from 'react';

export const EpisodeSingle: React.FC = () => (
  <PageLayout>
    <HeroSection />
    <SectionLayout title="Characters in this episode">
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
