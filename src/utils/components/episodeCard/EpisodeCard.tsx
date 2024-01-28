import React from 'react';
import { Button, ImageGroup } from '../../UI';
import { FiArrowUpRight } from 'react-icons/fi';

const mockData = [
  {
    "id": "1",
    "name": "Rick Sanchez",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    "id": "2",
    "name": "Morty Smith",
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  },
  {
    "id": "3",
    "name": "Summer Smith",
    "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
  },
  {
    "id": "4",
    "name": "Beth Smith",
    "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
  },
  {
    "id": "5",
    "name": "Jerry Smith",
    "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
  },
]

export const EpisodeCard : React.FC= () => {
  return (
    <div className={'bg-light-thirty dark:bg-dark-thirty p-5 rounded-[20px] flex flex-col gap-5'}>
      <div className={'flex flex-col'}>
        <div className={'flex items-center justify-between'}>
          <h3 className={'title4'}>Lawnmower Dog</h3>
          <h3 className={'title4'}>S01E02</h3>
        </div>
        <p className={'regular text-light-secondary dark:text-dark-secondary'}>December 9, 2013</p>
      </div>
      <div className={'flex items-center gap-5'}>
        <ImageGroup data={mockData}/>
        <Button icon={<FiArrowUpRight color={'fill-light-secondary dark:fill-dark-secondary'} />} >{`and ${mockData.length} other characters`}</Button>
      </div>
    </div>
  );
};