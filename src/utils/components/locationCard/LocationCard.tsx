import React from 'react';
import { ImageGroup, LinkButton } from '@UI';
import { FiArrowUpRight } from 'react-icons/fi';

const mockData = [
  {
    'id': '1',
    'name': 'Rick Sanchez',
    'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    'id': '2',
    'name': 'Morty Smith',
    'image': 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  },
  {
    'id': '3',
    'name': 'Summer Smith',
    'image': 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  },
  {
    'id': '4',
    'name': 'Beth Smith',
    'image': 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  },
  {
    'id': '5',
    'name': 'Jerry Smith',
    'image': 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
  }
];
export const LocationCard: React.FC = () => {
  return (
    <div className={'flex flex-col gap-5 bg-light-thirty dark:bg-dark-thirty p-5 rounded-[20px] items-start'}>
      <div className={'flex flex-col gap-2'}>
        <h3 className={'title4-bold'}>Earth (C-137)</h3>
        <p className={'title4'}>🪐 Planet</p>
        <p className={'regular text-light-secondary dark:text-dark-secondary'}>Dimension: {'unknown'}</p>

      </div>
      <ImageGroup data={mockData} />
      <LinkButton href={'location/id'} icon={<FiArrowUpRight
        color={'fill-light-secondary dark:fill-dark-secondary'} />}>{`and ${mockData.length} other characters`}</LinkButton>
    </div>
  );
};