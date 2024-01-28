import React from 'react';
import { Button } from '../../UI';
import { FiArrowUpRight } from 'react-icons/fi';

export const CharacterCard :React.FC = () => {
  return (
    <div className={`bg-light-thirty dark:bg-dark-thirty p-[12px] flex flex-col gap-5 rounded-[10px]`}>
      <div >
        <img className={'w-full'} src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
      </div>
      <div className={'flex items-center justify-between'}>
        <div className={'flex flex-col'}>
          <h2 className={'title5'}>Character Card</h2>
          <div className={'flex items-center gap-5'}>
            <p className={'regular text-light-secondary dark:text-dark-secondary '}>Human</p>
            <div   className={'block rounded-full w-2 h-2 bg-red'}></div>
          </div>
        </div>
        <Button icon={<FiArrowUpRight color={'fill-light-secondary dark:fill-dark-secondary'} />}/>
      </div>
    </div>
  );
};