import { LocationCard } from '@components';
import { GridLayout, HomeSectionLayout } from '@layouts';
import React from 'react';

export const LocationSection: React.FC = () => (
  <HomeSectionLayout link="/locations" title="Locations">
    <GridLayout>
      <LocationCard />
      <LocationCard />
      <LocationCard />
      <LocationCard />
    </GridLayout>
  </HomeSectionLayout>
);
