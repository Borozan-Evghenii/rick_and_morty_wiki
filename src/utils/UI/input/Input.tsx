import React from 'react';
import { getProps } from '../../../../@types';

interface InputProps extends getProps<'input'> {
  icon: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ icon, ...props }) => {
  return (
    <div
      className={'gap-2.5 mt-[40px] border border-light-accent dark:border-dark-accent rounded-lg flex items-stretch justify-start h-[48px] overflow-hidden px-[12px]'}>
      {icon}
      <input {...props}
             placeholder="Enter name"
             type="text"
             className={'w-full outline-0 bg-transparent placeholder:text-light-secondary dark:placeholder:text-dark-secondary'}
      />
    </div>
  );
};