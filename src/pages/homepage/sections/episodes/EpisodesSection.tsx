import { EpisodeCard } from '@components';
import { useGetAllEpisodesQuery } from '@gql';
import { GridLayout, HomeSectionLayout } from '@layouts';
import React from 'react';

export const EpisodesSection: React.FC = () => {
  const episodes = useGetAllEpisodesQuery();
  return (
    <HomeSectionLayout link="/episodes" title="Episodes">
      <GridLayout columns="3">
        {episodes.data?.episodes.results.map((episode, index) => (
          <EpisodeCard episodeData={episode} index={index} />
        ))}
      </GridLayout>
    </HomeSectionLayout>
  );
};
