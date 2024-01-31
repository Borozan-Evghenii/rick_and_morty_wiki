import { Autocomplete, CharacterCard, HeroSection, Select } from '@components';
import { FilterLayout, GridLayout, PageLayout, SectionLayout } from '@layouts';
import React from 'react';

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
export const Characters: React.FC = () => (
  <PageLayout>
    <HeroSection />
    <FilterLayout>
      <Autocomplete
        className="md:col-span-full lg:col-span-1"
        data={mockData.names}
        /* eslint-disable-next-line no-console */
        onChange={(_, value) => console.log(value)}
      />
      <Select
        data={mockData.status}
        prefix="Status: "
        /* eslint-disable-next-line no-console */
        onSelect={(_, value) => console.log(value)}
      />
      <Select
        data={mockData.species}
        prefix="Species: "
        /* eslint-disable-next-line no-console */
        onSelect={(_, value) => console.log(value)}
      />

      <Select
        data={mockData.type}
        prefix="Type: "
        /* eslint-disable-next-line no-console */
        onSelect={(_, value) => console.log(value)}
      />
      <Select
        data={mockData.gender}
        prefix="Gender: "
        /* eslint-disable-next-line no-console */
        onSelect={(_, value) => console.log(value)}
      />
    </FilterLayout>
    <SectionLayout>
      <GridLayout>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </GridLayout>
    </SectionLayout>
  </PageLayout>
);
