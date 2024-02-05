import { ImageGroup, LinkButton } from '@UI';
import type { LocationCardFragment } from '@gql';
import { getNumberOfResidents } from '@helpers';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface LocationCardProps {
  locationInfo: LocationCardFragment;
}

export const LocationCard: React.FC<LocationCardProps> = ({ locationInfo }) => (
  <div className="flex flex-col items-start gap-5 rounded-[20px] bg-light-thirty p-5 dark:bg-dark-thirty">
    <div className="flex flex-col gap-2">
      <h3 className="title4-bold">{locationInfo.name}</h3>
      <p className="title4">🪐 {locationInfo.type}</p>
      <p className="regular text-light-secondary dark:text-dark-secondary">
        Dimension: {locationInfo.dimension}
      </p>
    </div>
    <ImageGroup charactersData={locationInfo.residents} />
    <LinkButton
      href={`/location/${locationInfo.id}`}
      icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
    >{`and ${getNumberOfResidents(locationInfo.residents.length)} other characters`}</LinkButton>
  </div>
);
