import { CharacterCard, HeroSection } from '@components';
import { useGetEpisodeByIdQuery } from '@gql';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import React from 'react';
import { useParams } from 'react-router';

export const EpisodeSingle: React.FC = () => {
  const param = useParams();
  const episodeId = param.id || ' ';

  const episodeResponse = useGetEpisodeByIdQuery({
    variables: {
      id: episodeId
    }
  });

  return (
    <PageLayout>
      <HeroSection />
      <SectionLayout title="Characters in this episode">
        <GridLayout>
          {episodeResponse?.data?.episodesByIds[0]?.characters.map((character) => (
            <CharacterCard key={character.id} info={character} />
          ))}
        </GridLayout>
      </SectionLayout>
    </PageLayout>
  );
};
