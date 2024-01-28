import React from 'react';
import { getProps } from '../../../../@types';

interface ButtonProps extends getProps<'button'> {
  children?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, icon ,...props}) => {


  return (
    <button
      className={`
      transition
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
      `}
      {...props}
    >
      {children ? `${children}` : ''}
      {icon && (<div>
        {icon}
      </div>)}
    </button>
  );
};
