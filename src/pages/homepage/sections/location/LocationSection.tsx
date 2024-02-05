import { LocationCard } from '@components';
import { useGetAllLocationsQuery } from '@gql';
import { GridLayout, HomeSectionLayout } from '@layouts';
import React from 'react';

export const LocationSection: React.FC = () => {
  const locations = useGetAllLocationsQuery();
  return (
    <HomeSectionLayout link="/locations" title="Locations">
      <GridLayout>
        {locations.data?.locations.results.map((location) => (
          <LocationCard key={location.id} locationInfo={location} />
        ))}
      </GridLayout>
    </HomeSectionLayout>
  );
};
