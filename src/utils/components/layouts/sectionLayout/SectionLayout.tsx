import React from 'react';
import { Button } from '../../../UI';
import { FiArrowUpRight } from 'react-icons/fi';

interface SectionLayout{
  title: string
  link?: string
  children: React.ReactNode
}

export const SectionLayout :React.FC<SectionLayout> = ({title, children,link,...props}) => {
  return (
    <div className={'app-container'} {...props}>
      <div className={'flex items-center justify-between flex-wrap'}>
        <h2 className={'title3'}>{title}{link}</h2>
        <Button icon={<FiArrowUpRight />}>View all</Button>
      </div>
        {children}
    </div>
  );
};