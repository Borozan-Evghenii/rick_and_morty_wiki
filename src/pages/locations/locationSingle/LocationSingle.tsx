import { CharacterCard, CharacterCardLoader, HeroSection } from '@components';
import { useGetLocationByIdQuery } from '@gql';
import { GridLayout, SectionLayout } from '@layouts';
import React from 'react';
import { useParams } from 'react-router';

import NotFoundResults from '../../../utils/components/notFoundResults/NotFoundResults.tsx';

export const LocationSingle: React.FC = () => {
  const params = useParams();
  const locationResponse = useGetLocationByIdQuery({
    variables: {
      ids: params.id!
    }
  });
  return (
    <>
      <HeroSection title={locationResponse?.data?.locationsByIds[0]?.name} />
      <SectionLayout title="Characters who live in this location">
        {!locationResponse?.data?.locationsByIds[0]?.residents?.length &&
        !locationResponse.loading ? (
          <NotFoundResults />
        ) : (
          <GridLayout>
            {locationResponse?.data?.locationsByIds[0]?.residents?.map((character, index) => (
              <CharacterCard key={character.id} index={index} info={character} />
            ))}
          </GridLayout>
        )}

        {locationResponse.loading && (
          <GridLayout>
            <CharacterCardLoader />
            <CharacterCardLoader />
            <CharacterCardLoader />
            <CharacterCardLoader />
          </GridLayout>
        )}
      </SectionLayout>
    </>
  );
};
