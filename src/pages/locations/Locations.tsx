import { Autocomplete, HeroSection, LocationCard, Select } from '@components';
import { GetFilterLocationsDocument, useGetFilterLocationsQuery } from '@gql';
import { FilterLayout, GridLayout, PageLayout, SectionLayout } from '@layouts';
import { useState } from 'react';

const mockData = {
  dimension: [
    { id: '0', name: 'Default' },
    { id: '1', name: 'Dimension C-137' },
    { id: '2', name: 'Post-Apocalyptic Dimension' },
    { id: '3', name: 'Replacement Dimension' },
    { id: '4', name: 'Unknown' }
  ],
  search: [
    { id: '1', name: 'Abadogo' },
    { id: '2', name: 'Aatomy Park' },
    { id: '3', name: 'Earth (C-137)' },
    { id: '4', name: 'Citadel of Ricks' },
    { id: '5', name: "Worldender's lair" },
    { id: '6', name: 'Interdimensional Cable' },
    { id: '7', name: 'Immortality Field Resort' }
  ],
  type: [
    { id: '0', name: 'Default' },
    { id: '1', name: 'Planet' },
    { id: '2', name: 'Cluster' },
    { id: '3', name: 'Microverse' },
    { id: '4', name: 'Resort' },
    { id: '5', name: 'Space station' }
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
          query={GetFilterLocationsDocument}
          onSelect={(_, value) =>
            setFilter((prev) => ({ ...prev, name: value === 'Default' ? '' : value }))
          }
        />
        <Select
          data={mockData.type}
          prefix="Type: "
          onSelect={(_, value) =>
            setFilter((prevState) => ({ ...prevState, type: value === 'Default' ? '' : value }))
          }
        />
        <Select
          data={mockData.dimension}
          prefix="Dimension: "
          onSelect={(_, value) => setFilter((prevState) => ({ ...prevState, dimension: value }))}
        />
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
