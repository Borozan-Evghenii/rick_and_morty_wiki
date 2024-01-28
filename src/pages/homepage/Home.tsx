import React from 'react';
import { CharactersSection, HomeHeroSection, LocationSection } from './sections';
import EpisodesSection from './sections/episodes/EpisodesSection.tsx';


export const Home: React.FC = () => {
  return (
    <main className={'p-[10px]'}>
      <HomeHeroSection />
      <CharactersSection/>
      <EpisodesSection/>
      <LocationSection/>
    </main>
  );
};
