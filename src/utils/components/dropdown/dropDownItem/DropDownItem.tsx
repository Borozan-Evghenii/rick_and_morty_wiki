import React from 'react';
import { getProps } from '../../../../../@types';

interface DropDownItemProps extends getProps<'div'> {
  children: string;
}

export const DropDownItem: React.FC<DropDownItemProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={'text-light-primary dark:text-dark-primary bg-light-background dark:bg-dark-background hover:cursor-pointer hover:bg-light-accent dark:hover:bg-dark-accent p-4'}>
      {children}
    </div>
  );
};
