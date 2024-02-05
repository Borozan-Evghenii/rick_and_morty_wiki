import { Autocomplete, CharacterCard, HeroSection, Select } from '@components';
import type { CharacterCardFragmentFragment } from '@gql';
import { useGetFilterCharactersQuery } from '@gql';
import { FilterLayout, GridLayout, PageLayout, SectionLayout } from '@layouts';
import { useState } from 'react';

const mockData = {
  gender: [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'unknown' }
  ],
  names: [
    { id: '1', value: 'Rick Sanchez' },
    { id: '2', value: 'Morty Smith' },
    { id: '3', value: 'Summer Smith' },
    { id: '4', value: 'Jerry Smith' },
    { id: '5', value: 'Beth Smith' }
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

const filterObj = {
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
    <PageLayout>
      <HeroSection />
      <FilterLayout>
        <Autocomplete
          className="md:col-span-full lg:col-span-1"
          data={mockData.names}
          onChange={(_, value) => setFilter((prev) => ({ ...prev, name: value }))}
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
    </PageLayout>
  );
};
