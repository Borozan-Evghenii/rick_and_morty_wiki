import { LinkButton } from '@UI';
import { EpisodeCard, HeroSection } from '@components';
import type { EpisodeCardFragment } from '@gql';
import { useGetCharacterByIdQuery } from '@gql';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useParams } from 'react-router';

export const CharacterSingle: React.FC = () => {
  const params = useParams();
  const characterId = params.id || '';

  const characterResponse = useGetCharacterByIdQuery({
    variables: {
      ids: characterId
    }
  });

  const characterInfo = characterResponse.data?.charactersByIds[0];

  return (
    <PageLayout>
      <HeroSection characterImage={characterInfo?.image} />
      <SectionLayout>
        <div className="relative z-10 -mt-32 flex flex-col flex-wrap items-start gap-10 md:flex-row md:items-end">
          <div>
            <img alt="" src={`${characterInfo?.image}`} />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="title3 text-light-primary dark:text-dark-primary">
              {characterInfo?.name}
            </h1>
            <ul className="flex flex-wrap items-start gap-2.5 *:rounded-full *:bg-light-accent *:px-[11px] *:py-[10px] *:text-regular dark:*:bg-dark-accent md:items-center">
              <li>{characterInfo?.status}</li>
              <li>Species: {characterInfo?.species}</li>
              <li>Type: {characterInfo?.type || 'unknown'}</li>
              <li>Gender: {characterInfo?.gender}</li>
            </ul>
            <ul className="flex flex-wrap gap-2.5">
              <li>
                <LinkButton
                  href={`/location/${characterInfo?.origin.id}`}
                  icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
                >
                  Origin:{characterInfo?.origin.name}
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  href={`/location/${characterInfo?.location.id}`}
                  icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
                >
                  Current location: {characterInfo?.location.name}
                </LinkButton>
              </li>
            </ul>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout title={`The character appears in ${characterInfo?.episode.length} episodes`}>
        <GridLayout>
          {characterResponse.data?.charactersByIds[0].episode.map((episod: EpisodeCardFragment) => (
            <EpisodeCard key={episod.id} episodeData={episod} />
          ))}
        </GridLayout>
      </SectionLayout>
    </PageLayout>
  );
};
