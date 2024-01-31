import React from 'react';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import { EpisodeCard, HeroSection } from '@components';
import { LinkButton } from '@UI';
import { FiArrowUpRight } from 'react-icons/fi';

export const CharacterSingle: React.FC = () => {
  return (
    <PageLayout>
      <HeroSection />
      <SectionLayout>
        <div className={'-mt-32 z-10 items-start relative flex flex-col gap-10 flex-wrap md:flex-row md:items-end'}>
          <div>
            <img src="https://rickandmortyapi.com/api/character/avatar/11.jpeg" alt="" />
          </div>
          <div className={'flex flex-col gap-5'}>
            <h1 className={'title3 text-light-primary dark:text-dark-primary'}>Morty’s Girlfriend</h1>
            <ul
              className={'flex-wrap flex items-start gap-2.5 *:text-regular *:rounded-full *:px-[11px] *:py-[10px] *:bg-light-accent dark:*:bg-dark-accent md:items-center'}>
              <li>Alive</li>
              <li>Species: Humanoid</li>
              <li>Type: Trunk-Person</li>
              <li>Gender: Male</li>
            </ul>
            <ul className={'flex gap-2.5 flex-wrap'}>
              <li>
                <LinkButton
                  href={'/location/3'}
                  icon={<FiArrowUpRight color={'fill-light-secondary dark:fill-dark-secondary'} />}
                >Origin: ''Trunk World''</LinkButton>
              </li>
              <li>
                <LinkButton
                  href={'/location/4'}
                  icon={<FiArrowUpRight color={'fill-light-secondary dark:fill-dark-secondary'} />}
                >Current location: ''Interdimensional Cable''</LinkButton>
              </li>
            </ul>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout title={'The character appears in {200} episodes'}>
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
  )
    ;
};