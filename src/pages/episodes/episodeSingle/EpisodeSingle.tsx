import { CharacterCard, CharacterCardLoader, HeroSection } from '@components';
import { useGetEpisodeByIdQuery } from '@gql';
import { GridLayout, SectionLayout } from '@layouts';
import React from 'react';
import { useParams } from 'react-router';

import NotFoundResults from '../../../utils/components/notFoundResults/NotFoundResults.tsx';

export const EpisodeSingle: React.FC = () => {
  const param = useParams();
  const episodeId = param.id || ' ';

  const episodeResponse = useGetEpisodeByIdQuery({
    variables: {
      id: episodeId
    }
  });

  return (
    <>
      <HeroSection title={episodeResponse.data?.episodesByIds[0].name} />
      <SectionLayout title="Characters in this episode">
        {!episodeResponse?.data?.episodesByIds[0].characters?.length && !episodeResponse.loading ? (
          <NotFoundResults />
        ) : (
          <GridLayout>
            {episodeResponse?.data?.episodesByIds[0].characters?.map((character, index) => (
              <CharacterCard key={character.id} index={index} info={character} />
            ))}
          </GridLayout>
        )}

        {episodeResponse.loading && (
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
