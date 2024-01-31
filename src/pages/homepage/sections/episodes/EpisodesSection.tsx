import React from 'react';
import { EpisodeCard } from '../../../../utils/components/episodeCard/EpisodeCard.tsx';
import { GridLayout, HomeSectionLayout } from '@layouts';

const EpisodesSection : React.FC = () => {
  return (
    <HomeSectionLayout link={'/episodes'} title={'Episodes'}>
      <GridLayout columns={'3'}>
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
      </GridLayout>
    </HomeSectionLayout>
  );
};

export default EpisodesSection;