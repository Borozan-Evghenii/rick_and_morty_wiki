import React from 'react';
import { LinkButton } from '@UI';
import { FiArrowUpRight } from 'react-icons/fi';

interface HomeSectionLayout {
  title: string;
  link: string;
  children: React.ReactNode;
}

export const HomeSectionLayout: React.FC<HomeSectionLayout> = ({ title, children, link, ...props }) => {
  return (
    <section className={'app-container'} {...props}>
      <div className={'grid grid-cols-1 justify-items-start xs:items-center xs:grid-cols-2  gap-2'}>
        <h2 className={'title3'}>{title}</h2>
        <LinkButton href={link} icon={<FiArrowUpRight />} className={'xs:justify-self-end'}>View all</LinkButton>
      </div>
      {children}
    </section>
  );
};