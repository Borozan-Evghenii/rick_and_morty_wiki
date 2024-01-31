import { EpisodeCard, HeroSection, Select } from '@components';
import { GridLayout, PageLayout, SectionLayout } from '@layouts';
import React from 'react';

const selectData = [
  { id: '1', value: 'SO01E' },
  { id: '2', value: 'SO02E' },
  { id: '3', value: 'SO03E' }
];
export const Episodes: React.FC = () => (
  <PageLayout>
    <HeroSection />
    <SectionLayout>
      <div className="flex justify-end">
        <Select
          className="min-w-[230px]"
          data={selectData}
          prefix="Episode: "
          /* eslint-disable-next-line no-console */
          onSelect={() => console.log('')}
        />
      </div>
    </SectionLayout>
    <SectionLayout>
      <GridLayout columns="3">
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
