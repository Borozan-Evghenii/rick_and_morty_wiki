import { PageLayout } from '@layouts';
import { CharactersSection, EpisodesSection, HomeHeroSection, LocationSection } from '@sections';

export const Home = () => (
  <PageLayout>
    <HomeHeroSection />
    <CharactersSection />
    <EpisodesSection />
    <LocationSection />
  </PageLayout>
);
