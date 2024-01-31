import { LinkButton } from '@UI';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface HomeSectionLayoutProps {
  title: string;
  link: string;
  children: React.ReactNode;
}

export const HomeSectionLayout: React.FC<HomeSectionLayoutProps> = ({
  title,
  children,
  link,
  ...props
}) => (
  <section className="app-container" {...props}>
    <div className="grid grid-cols-1 justify-items-start gap-2 xs:grid-cols-2  xs:items-center">
      <h2 className="title3">{title}</h2>
      <LinkButton className="xs:justify-self-end" href={link} icon={<FiArrowUpRight />}>
        View all
      </LinkButton>
    </div>
    {children}
  </section>
);
