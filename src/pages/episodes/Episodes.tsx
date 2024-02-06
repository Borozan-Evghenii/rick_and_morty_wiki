import { Autocomplete, EpisodeCard, HeroSection, Select } from '@components';
import { GetFilterEpisodesDocument, useGetFilterEpisodesQuery } from '@gql';
import { GridLayout, SectionLayout } from '@layouts';
import { useState } from 'react';

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
        <GridLayout columns="3">
          {episodesResponse.data?.episodes.results.map((episode) => (
            <EpisodeCard key={episode.id} episodeData={episode} />
          ))}
        </GridLayout>
      </SectionLayout>
    </>
  );
};
