import React from 'react';
import { LocationCard } from '../../../../utils/components';
import { GridLayout, SectionLayout } from '../../../../utils/components/layouts';

export const LocationSection :React.FC= () => {
  return (
    <SectionLayout title={'Locations'}>
      <GridLayout>
        <LocationCard/>
        <LocationCard/>
        <LocationCard/>
        <LocationCard/>
      </GridLayout>
    </SectionLayout>
  );
};
