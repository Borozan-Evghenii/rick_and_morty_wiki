import React from 'react';
import { Autocomplete, HeroSection, LocationCard, Select } from '@components';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';

const mockData = {
  search: [
    { id: '1', value: 'Abadogo' },
    { id: '2', value: 'Aatomy Park' },
    { id: '3', value: 'Earth (C-137)' },
    { id: '4', value: 'Citadel of Ricks' },
    { id: '5', value: 'Worldender\'s lair' },
    { id: '6', value: 'Interdimensional Cable' },
    { id: '7', value: 'Immortality Field Resort' }
  ],
  type: [
    { id: '1', value: 'Planet' },
    { id: '2', value: 'Cluster' },
    { id: '3', value: 'Microverse' },
    { id: '4', value: 'Resort' },
    { id: '5', value: 'Space station' }
  ],
  dimension: [
    { id: '1', value: 'Dimension C-137' },
    { id: '2', value: 'Post-Apocalyptic Dimension' },
    { id: '3', value: 'Replacement Dimension' },
    { id: '4', value: 'Unknown' }
  ]
};

export const Locations :React.FC= () => {
  return (
    <PageLayout>
      <HeroSection />
      <SectionLayout>
        <div className={'grid grid-cols-4 gap-5'}>
          <Autocomplete className={'col-span-2'} data={mockData.search} onChange={() => {
          }} />
          <Select prefix={'Type: '} data={mockData.type} onSelect={() => {
          }} />
          <Select prefix={'Dimension: '} data={mockData.dimension} onSelect={() => {
          }} />
        </div>
      </SectionLayout>
      <SectionLayout>
        <GridLayout columns={'4'}>
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
        </GridLayout>
      </SectionLayout>
    </PageLayout>
  );
};
