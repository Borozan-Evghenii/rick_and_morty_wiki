import { Autocomplete, CharacterCard, HeroSection, Select } from '@components';
import type { CharacterCardFragmentFragment } from '@gql';
import { GetFilterCharactersDocument, useGetFilterCharactersQuery } from '@gql';
import { FilterLayout, GridLayout, SectionLayout } from '@layouts';
import { useState } from 'react';

const mockData = {
  gender: [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'unknown' }
  ],
  species: [
    { id: '1', value: 'Human' },
    { id: '2', value: 'Alien' }
  ],
  status: [
    { id: '1', value: 'Alive' },
    { id: '2', value: 'Death' },
    { id: '3', value: 'Unknown' }
  ],
  type: [
    { id: '1', value: 'Genetic experiment' },
    { id: '2', value: 'Superhuman (Ghost trains summoner)' },
    { id: '3', value: 'Parasite' },
    { id: '4', value: 'Human with antennae' },
    { id: '5', value: 'Human with ants in his eyes' }
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
        <GridLayout>
          {charactersResponse?.data?.characters?.results?.map(
            (character: CharacterCardFragmentFragment) => (
              <CharacterCard key={character.id} info={character} />
            )
          )}
        </GridLayout>
      </SectionLayout>
    </>
  );
};
