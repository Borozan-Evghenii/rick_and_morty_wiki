import React from 'react';

interface PaginationButtonProps extends GetProps<'button'> {
  children: React.ReactNode;
  className?: string;
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button
    className={`${className} rounded-[8px] border border-light-accent px-[13px] py-[7px] text-light-secondary hover:border-light-primary hover:text-light-primary dark:border-dark-accent dark:bg-dark-background dark:text-dark-secondary dark:hover:border-dark-primary dark:hover:text-dark-primary`}
    {...props}
  >
    {children}
  </button>
);
