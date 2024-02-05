import { Autocomplete, HeroSection, LocationCard, Select } from '@components';
import { useGetFilterLocationsQuery } from '@gql';
import { FilterLayout, GridLayout, PageLayout, SectionLayout } from '@layouts';
import { useState } from 'react';

const mockData = {
  dimension: [
    { id: '1', value: 'Dimension C-137' },
    { id: '2', value: 'Post-Apocalyptic Dimension' },
    { id: '3', value: 'Replacement Dimension' },
    { id: '4', value: 'Unknown' }
  ],
  search: [
    { id: '1', value: 'Abadogo' },
    { id: '2', value: 'Aatomy Park' },
    { id: '3', value: 'Earth (C-137)' },
    { id: '4', value: 'Citadel of Ricks' },
    { id: '5', value: "Worldender's lair" },
    { id: '6', value: 'Interdimensional Cable' },
    { id: '7', value: 'Immortality Field Resort' }
  ],
  type: [
    { id: '1', value: 'Planet' },
    { id: '2', value: 'Cluster' },
    { id: '3', value: 'Microverse' },
    { id: '4', value: 'Resort' },
    { id: '5', value: 'Space station' }
  ]
};

interface Filter {
  dimension: string;
  type: string;
  name: string;
}

const filterObject: Filter = {
  dimension: '',
  name: '',
  type: ''
};

export const Locations = () => {
  const [filter, setFilter] = useState(filterObject);

  const locationsResponse = useGetFilterLocationsQuery({
    variables: filter
  });

  return (
    <PageLayout>
      <HeroSection />
      <FilterLayout>
        <Autocomplete
          className="md:col-span-2 lg:col-span-3"
          data={mockData.search}
          onChange={(_, value) => setFilter((prev) => ({ ...prev, name: value }))}
          onSelect={(_, value) => setFilter((prev) => ({ ...prev, name: value }))}
        />
        <Select data={mockData.type} prefix="Type: " onSelect={() => {}} />
        <Select data={mockData.dimension} prefix="Dimension: " onSelect={() => {}} />
      </FilterLayout>
      <SectionLayout>
        <GridLayout columns="4">
          {locationsResponse.data?.locations.results.map((location) => (
            <LocationCard key={location.id} locationInfo={location} />
          ))}
        </GridLayout>
      </SectionLayout>
    </PageLayout>
  );
};
