import { LinkButton } from '@UI';
import { EpisodeCard, HeroSection } from '@components';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export const CharacterSingle: React.FC = () => (
  <PageLayout>
    <HeroSection />
    <SectionLayout>
      <div className="relative z-10 -mt-32 flex flex-col flex-wrap items-start gap-10 md:flex-row md:items-end">
        <div>
          <img alt="" src="https://rickandmortyapi.com/api/character/avatar/11.jpeg" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="title3 text-light-primary dark:text-dark-primary">Morty’s Girlfriend</h1>
          <ul className="flex flex-wrap items-start gap-2.5 *:rounded-full *:bg-light-accent *:px-[11px] *:py-[10px] *:text-regular dark:*:bg-dark-accent md:items-center">
            <li>Alive</li>
            <li>Species: Humanoid</li>
            <li>Type: Trunk-Person</li>
            <li>Gender: Male</li>
          </ul>
          <ul className="flex flex-wrap gap-2.5">
            <li>
              <LinkButton
                href="/location/3"
                icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
              >
                Origin:Trunk World
              </LinkButton>
            </li>
            <li>
              <LinkButton
                href="/location/4"
                icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
              >
                Current location: Interdimensional Cable
              </LinkButton>
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
    <SectionLayout title="The character appears in {200} episodes">
      <GridLayout>
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
      </GridLayout>
    </SectionLayout>
  </PageLayout>
);
