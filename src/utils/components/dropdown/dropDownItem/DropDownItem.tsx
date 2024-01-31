import React from 'react';

import type { GetProps } from '../../../../../@types';

interface DropDownItemProps extends GetProps<'div'> {
  children: string;
}

export const DropDownItem: React.FC<DropDownItemProps> = ({ children, ...props }) => (
  <div
    {...props}
    className="bg-light-background p-4 text-light-primary hover:cursor-pointer hover:bg-light-accent dark:bg-dark-background dark:text-dark-primary dark:hover:bg-dark-accent"
  >
    {children}
  </div>
);
