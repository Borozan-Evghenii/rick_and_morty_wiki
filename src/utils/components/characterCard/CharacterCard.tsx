import { LinkButton } from '@UI';
import type { CharacterCardFragmentFragment } from '@gql';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export const CharacterCard: React.FC<{ info: CharacterCardFragmentFragment }> = ({ info }) => (
  <div className="flex flex-col gap-5 rounded-[10px] bg-light-thirty p-[12px] dark:bg-dark-thirty">
    <div>
      <img alt={`${info?.name}`} className="w-full" src={`${info?.image}`} />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h2 className="title5">{info?.name}</h2>
        <div className="flex items-center gap-5">
          <p className="regular text-light-secondary dark:text-dark-secondary ">{info?.species}</p>
          <div className="bg-red block h-2 w-2 rounded-full" />
        </div>
      </div>
      <LinkButton
        href={`/character/${info?.id}`}
        icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
      />
    </div>
  </div>
);
