import React from 'react';

interface DropDownItemProps extends GetProps<'li'> {
  children: React.ReactNode;
}

export const DropDownItem: React.FC<DropDownItemProps> = ({ children, ...props }) => (
  <li
    {...props}
    className="bg-light-background p-4 text-light-primary hover:cursor-pointer hover:bg-light-accent dark:bg-dark-background dark:text-dark-primary dark:hover:bg-dark-accent"
  >
    {children}
  </li>
);
