import React from 'react';
import { Button } from '../../../../utils/UI';
import { FiArrowUpRight } from 'react-icons/fi';
import { EpisodeCard } from '../../../../utils/components/episodeCard/EpisodeCard.tsx';

const EpisodesSection : React.FC = () => {
  return (
    <div className={'app-container'}>
      <div className={'flex items-center justify-between'}>
        <h2 className={'title3'}>Episodes</h2>
        <Button icon={<FiArrowUpRight />}>View all</Button>
      </div>
      <div className={'grid grid-cols-3 gap-5'}>
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
      </div>
    </div>
  );
};

export default EpisodesSection;