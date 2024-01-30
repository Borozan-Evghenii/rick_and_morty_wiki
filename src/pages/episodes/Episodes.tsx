import { CiSearch } from 'react-icons/ci';
import React from 'react';
import { PageLayout } from '@layouts';
import { Autocomplete, HeroSection, Select } from '@components';
import EpisodesSection from '../homepage/sections/episodes/EpisodesSection.tsx';


export const Episodes: React.FC = () => {
  return (
    <PageLayout >
      <HeroSection />
      <Autocomplete
        onChange={value => console.log('@ episodes', value)}
        data={[{ id: '1', value: 'Alive' }, { id: '2', value: 'Death' }, { id: '3', value: 'Unknown' }]}
        icon={<CiSearch className={'w-5 h-full'} />}
      />
      <Select />
      <EpisodesSection />
    </PageLayout>
  );
};