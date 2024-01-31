import React from 'react';
import { FilterLayout, GridLayout, PageLayout, SectionLayout } from '@layouts';
import { Autocomplete, CharacterCard, HeroSection, Select } from '@components';

const mockData = {
  gender: [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'unknown' }
  ],
  type: [
    { id: '1', value: 'Genetic experiment' },
    { id: '2', value: 'Superhuman (Ghost trains summoner)' },
    { id: '3', value: 'Parasite' },
    { id: '4', value: 'Human with antennae' },
    { id: '5', value: 'Human with ants in his eyes' }
  ],
  status: [
    { id: '1', value: 'Alive' },
    { id: '2', value: 'Death' },
    { id: '3', value: 'Unknown' }
  ],
  species: [
    { id: '1', value: 'Human' },
    { id: '2', value: 'Alien' }
  ],
  names: [
    { id: '1', value: 'Rick Sanchez' },
    { id: '2', value: 'Morty Smith' },
    { id: '3', value: 'Summer Smith' },
    { id: '4', value: 'Jerry Smith' },
    { id: '5', value: 'Beth Smith' }
  ]
};
export const Characters: React.FC = () => {
  return (
    <PageLayout>
      <HeroSection />
      <FilterLayout>
        <Autocomplete
          className={'md:col-span-full lg:col-span-1'}
          data={mockData.names}
          onChange={(_, value) => console.log(value)}
        />
        <Select
          prefix={'Status: '}
          data={mockData.status}
          onSelect={(_, value) => console.log(value)}
        />
        <Select
          prefix={'Species: '}
          data={mockData.species}
          onSelect={(_, value) => console.log(value)}
        />
        <Select
          prefix={'Type: '}
          data={mockData.type}
          onSelect={(_, value) => console.log(value)}
        />
        <Select
          prefix={'Gender: '}
          data={mockData.gender}
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
};
