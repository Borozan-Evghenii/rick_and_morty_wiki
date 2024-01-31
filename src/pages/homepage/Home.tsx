import { PageLayout } from '@layouts';
import React from 'react';

import { CharactersSection, HomeHeroSection, LocationSection } from './sections';
import EpisodesSection from './sections/episodes/EpisodesSection.tsx';

export const Home: React.FC = () => (
  <PageLayout>
    <HomeHeroSection />
    <CharactersSection />
    <EpisodesSection />
    <LocationSection />
  </PageLayout>
);
