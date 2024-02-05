import { ImageGroup, LinkButton } from '@UI';
import type { EpisodeCardFragment } from '@gql';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface EpisodeCardProps {
  episodeData: EpisodeCardFragment;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episodeData }) => (
  <div className="flex flex-col justify-between gap-5 rounded-[20px] bg-light-thirty p-5 dark:bg-dark-thirty">
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-between ">
        <h3 className="title4-bold mr-5">{episodeData.name}</h3>
        <h3 className="title4">{episodeData.episode}</h3>
      </div>
      <p className="regular text-light-secondary dark:text-dark-secondary">
        {episodeData.air_date}
      </p>
    </div>
    <div className="flex flex-wrap items-center gap-5">
      <ImageGroup charactersData={episodeData.characters} />
      <LinkButton
        href={`/episode/${episodeData.id}`}
        icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
      >{`and ${episodeData.characters.length - 5} other characters`}</LinkButton>
    </div>
  </div>
);
