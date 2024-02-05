import { CharacterCard, HeroSection } from '@components';
import { useGetLocationByIdQuery } from '@gql';
import { GridLayout, SectionLayout } from '@layouts';
import React from 'react';
import { useParams } from 'react-router';

export const LocationSingle: React.FC = () => {
  const params = useParams();
  const locations = useGetLocationByIdQuery({
    variables: {
      ids: params.id!
    }
  });
  return (
    <>
      <HeroSection title={locations?.data?.locationsByIds[0]?.name} />
      <SectionLayout title="Characters who live in this location">
        <GridLayout>
          {locations.data?.locationsByIds[0].residents.map((character) => (
            <CharacterCard info={character} />
          ))}
        </GridLayout>
      </SectionLayout>
    </>
  );
};
