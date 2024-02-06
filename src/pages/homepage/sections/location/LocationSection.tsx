import { LocationCard } from '@components';
import { useGetAllLocationsQuery } from '@gql';
import { GridLayout, HomeSectionLayout } from '@layouts';
import React from 'react';

export const LocationSection: React.FC = () => {
  const locations = useGetAllLocationsQuery();
  return (
    <HomeSectionLayout link="/locations" title="Locations">
      <GridLayout>
        {locations.data?.locations.results.map((location, index) => (
          <LocationCard key={location.id} index={index} locationInfo={location} />
        ))}
      </GridLayout>
    </HomeSectionLayout>
  );
};
