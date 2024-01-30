import React from 'react';
import { CharactersSection, HomeHeroSection, LocationSection } from './sections';
import EpisodesSection from './sections/episodes/EpisodesSection.tsx';
import { PageLayout } from '@layouts';


export const Home: React.FC = () => {
  return (
    <PageLayout>
      <HomeHeroSection />
      <CharactersSection/>
      <EpisodesSection/>
      <LocationSection/>
    </PageLayout>
  );
};
