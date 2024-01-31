import React from 'react';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import { CharacterCard, HeroSection } from '@components';

export const EpisodeSingle: React.FC = () => {
  return (
    <PageLayout>
      <HeroSection />
      <SectionLayout title={'Characters in this episode'}>
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
};
