import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  children?: React.ReactNode | string;
  icon?: React.ReactNode;
  className?: string;
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  icon,
  className,
  ...props
}) => (
  <Link
    to={href}
    className={`
      flex
      cursor-pointer
      flex-nowrap
      items-center gap-[10px] 
      whitespace-nowrap 
      rounded-full 
      bg-light-accent 
      px-[11px] 
      py-[10px] 
      hover:bg-light-hover 
      dark:bg-dark-accent
      dark:hover:bg-dark-hover
      ${className}
      `}
    {...props}
  >
    {/* eslint-disable-next-line @typescript-eslint/no-base-to-string,@typescript-eslint/restrict-template-expressions */}
    {children ? `${children}` : ''}
    {icon && <div>{icon}</div>}
  </Link>
);
