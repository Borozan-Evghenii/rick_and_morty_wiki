import { Autocomplete, CharacterCard, CharacterCardLoader, HeroSection, Select } from '@components';
import { GetFilterCharactersDocument, useGetFilterCharactersQuery } from '@gql';
import { FilterLayout, GridLayout, SectionLayout } from '@layouts';
import { useState } from 'react';

import NotFoundResults from '../../utils/components/notFoundResults/NotFoundResults.tsx';

const mockData = {
  gender: [
    { id: '1', name: 'Male' },
    { id: '2', name: 'Female' },
    { id: '3', name: 'unknown' }
  ],
  species: [
    { id: '1', name: 'Human' },
    { id: '2', name: 'Alien' }
  ],
  status: [
    { id: '1', name: 'Alive' },
    { id: '2', name: 'Death' },
    { id: '3', name: 'Unknown' }
  ],
  type: [
    { id: '1', name: 'Genetic experiment' },
    { id: '2', name: 'Superhuman (Ghost trains summoner)' },
    { id: '3', name: 'Parasite' },
    { id: '4', name: 'Human with antennae' },
    { id: '5', name: 'Human with ants in his eyes' }
  ]
};

interface Filter {
  gender: string;
  name: string;
  species: string;
  status: string;
  type: string;
}

const filterObj: Filter = {
  gender: '',
  name: '',
  species: '',
  status: '',
  type: ''
};
export const Characters = () => {
  const [filter, setFilter] = useState(filterObj);

  const charactersResponse = useGetFilterCharactersQuery({
    variables: filter
  });

  return (
    <>
      <HeroSection title="Characters" />
      <FilterLayout>
        <Autocomplete
          className="md:col-span-full lg:col-span-1"
          query={GetFilterCharactersDocument}
          onSelect={(_, value) => setFilter((prev) => ({ ...prev, name: value }))}
          onResetValue={() => {
            setFilter((prevState) => ({ ...prevState, name: '' }));
          }}
        />
        <Select
          data={mockData.status}
          prefix="Status: "
          onSelect={(_, value) => setFilter((prev) => ({ ...prev, status: value }))}
        />
        <Select
          data={mockData.species}
          prefix="Species: "
          /* eslint-disable-next-line no-console */
          onSelect={(_, value) => setFilter((prev) => ({ ...prev, species: value }))}
        />

        <Select
          data={mockData.type}
          prefix="Type: "
          /* eslint-disable-next-line no-console */
          onSelect={(_, value) => setFilter((prev) => ({ ...prev, type: value }))}
        />
        <Select
          data={mockData.gender}
          prefix="Gender: "
          /* eslint-disable-next-line no-console */
          onSelect={(_, value) => setFilter((prev) => ({ ...prev, gender: value }))}
        />
      </FilterLayout>
      <SectionLayout>
        {!charactersResponse?.data?.characters?.results?.length && !charactersResponse.loading ? (
          <NotFoundResults />
        ) : (
          <GridLayout>
            {charactersResponse?.data?.characters?.results?.map((character, index) => (
              <CharacterCard key={character.id} index={index} info={character} />
            ))}
          </GridLayout>
        )}

        {charactersResponse.loading && (
          <GridLayout>
            <CharacterCardLoader />
            <CharacterCardLoader />
            <CharacterCardLoader />
            <CharacterCardLoader />
          </GridLayout>
        )}
      </SectionLayout>
    </>
  );
};
