import { ImageGroup, LinkButton } from '@UI';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const mockData = [
  {
    id: '1',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez'
  },
  {
    id: '2',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Morty Smith'
  },
  {
    id: '3',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    name: 'Summer Smith'
  },
  {
    id: '4',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    name: 'Beth Smith'
  },
  {
    id: '5',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    name: 'Jerry Smith'
  }
];

export const EpisodeCard: React.FC = () => (
  <div className="flex flex-col gap-5 rounded-[20px] bg-light-thirty p-5 dark:bg-dark-thirty">
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-between">
        <h3 className="title4-bold mr-5">Lawnmower Dog</h3>
        <h3 className="title4">S01E02</h3>
      </div>
      <p className="regular text-light-secondary dark:text-dark-secondary">December 9, 2013</p>
    </div>
    <div className="flex flex-wrap items-center gap-5">
      <ImageGroup data={mockData} />
      <LinkButton
        href="/episode/3"
        icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
      >{`and ${mockData.length} other characters`}</LinkButton>
    </div>
  </div>
);
