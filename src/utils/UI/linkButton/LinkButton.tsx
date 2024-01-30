import React from 'react';
import { Link } from 'react-router-dom';


interface LinkButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, children, icon, className, ...props }) => {


  return (
    <Link
      to={href}
      className={`
      flex-nowrap
      hover:bg-light-hover
      dark:hover:bg-dark-hover
      flex gap-[10px] 
      items-center 
      py-[10px] 
      px-[11px] 
      cursor-pointer 
      rounded-full 
      bg-light-accent 
      dark:bg-dark-accent
      whitespace-nowrap
      ${className}
      `}
      {...props}
    >
      {children ? `${children}` : ''}
      {icon && (<div>
        {icon}
      </div>)}
    </Link>
  );
};
