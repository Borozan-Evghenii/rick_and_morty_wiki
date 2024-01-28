import React from 'react';
import { EpisodeCard } from '../../../../utils/components/episodeCard/EpisodeCard.tsx';
import { GridLayout, SectionLayout } from '../../../../utils/components/layouts';

const EpisodesSection : React.FC = () => {
  return (
    <SectionLayout title={'Episodes'}>
      <GridLayout columns={'3'}>
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
      </GridLayout>
    </SectionLayout>
  );
};

export default EpisodesSection;