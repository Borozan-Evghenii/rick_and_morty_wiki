import { LinkButton } from '@UI';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export const CharacterCard: React.FC = () => (
  <div className="flex flex-col gap-5 rounded-[10px] bg-light-thirty p-[12px] dark:bg-dark-thirty">
    <div>
      <img
        alt=""
        className="w-full"
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h2 className="title5">Character Card</h2>
        <div className="flex items-center gap-5">
          <p className="regular text-light-secondary dark:text-dark-secondary ">Human</p>
          <div className="bg-red block h-2 w-2 rounded-full" />
        </div>
      </div>
      <LinkButton
        href="/character/3"
        icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
      />
    </div>
  </div>
);
