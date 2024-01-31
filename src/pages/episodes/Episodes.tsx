import React from 'react';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import { EpisodeCard, HeroSection, Select } from '@components';

const selectData = [
  { id: '1', value: 'SO01E' },
  { id: '2', value: 'SO02E' },
  { id: '3', value: 'SO03E' }
];
export const Episodes: React.FC = () => {
  return (
    <PageLayout >
      <HeroSection />
      <SectionLayout>
        <div className={'flex justify-end'}>
          <Select
            className={'min-w-[230px]'}
            prefix={'Episode: '}
            data={selectData}
            onSelect={() => console.log('')}
          />
        </div>
      </SectionLayout>
      <SectionLayout>
        <GridLayout columns={'3'}>
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
          <EpisodeCard />
          <EpisodeCard />


        </GridLayout>
      </SectionLayout>
    </PageLayout>
  );
};