import { EpisodeCard } from '@components';
import { GridLayout, HomeSectionLayout } from '@layouts';
import React from 'react';

export const EpisodesSection: React.FC = () => (
  <HomeSectionLayout link="/episodes" title="Episodes">
    <GridLayout columns="3">
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
    </GridLayout>
  </HomeSectionLayout>
);
