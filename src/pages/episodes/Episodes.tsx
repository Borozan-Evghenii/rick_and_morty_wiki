import { Autocomplete, EpisodeCard, EpisodeCardLoader, HeroSection, Select } from '@components';
import { GetFilterEpisodesDocument, useGetFilterEpisodesQuery } from '@gql';
import { GridLayout, SectionLayout } from '@layouts';
import { useState } from 'react';

import NotFoundResults from '../../utils/components/notFoundResults/NotFoundResults.tsx';

interface Filter {
  name: string;
  episode: string;
}

const filterObject: Filter = {
  episode: '',
  name: ''
};

export const Episodes = () => {
  const [filter, setFilter] = useState<Filter>(filterObject);
  const episodesResponse = useGetFilterEpisodesQuery({ variables: filter });

  return (
    <>
      <HeroSection title="Episodes" />
      <SectionLayout>
        <div className="flex justify-end gap-5">
          <Autocomplete
            className="grow"
            query={GetFilterEpisodesDocument}
            onSelect={(_, value) => setFilter((prev) => ({ ...prev, name: value }))}
            onResetValue={() => {
              setFilter((prevState) => ({ ...prevState, name: '' }));
            }}
          />
          <Select
            className="min-w-[230px]"
            data={[]}
            prefix="Episode: "
            /* eslint-disable-next-line no-console */
            onSelect={(_, value) => setFilter((prev) => ({ ...prev, name: value }))}
          />
        </div>
      </SectionLayout>
      <SectionLayout>
        {episodesResponse.loading && (
          <GridLayout columns="3">
            <EpisodeCardLoader />
            <EpisodeCardLoader />
            <EpisodeCardLoader />
            <EpisodeCardLoader />
            <EpisodeCardLoader />
            <EpisodeCardLoader />
          </GridLayout>
        )}

        {!episodesResponse?.data?.episodes?.results?.length && !episodesResponse.loading ? (
          <NotFoundResults />
        ) : (
          <GridLayout columns="3">
            {episodesResponse?.data?.episodes?.results?.map((episode, index) => (
              <EpisodeCard key={episode.id} episodeData={episode} index={index} />
            ))}
          </GridLayout>
        )}
      </SectionLayout>
    </>
  );
};
