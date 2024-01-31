import React from 'react';
import { getProps } from '../../../../@types';

interface InputProps extends getProps<'input'> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ iconStart, iconEnd, ...props }) => {
  return (
    <div
      className={'has-[:focus]:border-light-primary dark:has-[:focus]:border-dark-primary gap-2.5 border border-light-accent dark:border-dark-accent rounded-lg flex items-stretch justify-start h-[48px] overflow-hidden px-[12px]'}>
      {iconStart}
      <input
        {...props}
        placeholder="Enter name"
        type="text"
        className={' text-regular truncate ... w-full outline-0 bg-transparent placeholder:text-light-secondary dark:placeholder:text-dark-secondary focus:'}
      />
      {iconEnd}
    </div>
  );
};