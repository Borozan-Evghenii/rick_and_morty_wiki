import React from 'react';
import { LocationCard } from '@components';
import { GridLayout, HomeSectionLayout } from '@layouts';

export const LocationSection :React.FC= () => {
  return (
    <HomeSectionLayout link={'/locations'} title={'Locations'}>
      <GridLayout>
        <LocationCard/>
        <LocationCard/>
        <LocationCard/>
        <LocationCard/>
      </GridLayout>
    </HomeSectionLayout>
  );
};
