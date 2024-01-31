import { GridLayout, HomeSectionLayout } from '@layouts';
import React from 'react';

import { EpisodeCard } from '../../../../utils/components/episodeCard/EpisodeCard.tsx';

const EpisodesSection: React.FC = () => (
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

export default EpisodesSection;
