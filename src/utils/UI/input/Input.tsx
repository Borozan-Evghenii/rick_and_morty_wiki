import React from 'react';

interface InputProps extends GetProps<'input'> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ iconStart, iconEnd, ...props }) => (
  <div className="flex h-[48px] items-stretch justify-start gap-2.5 overflow-hidden rounded-lg border border-light-accent px-[12px] has-[:focus]:border-light-primary dark:border-dark-accent dark:has-[:focus]:border-dark-primary">
    {iconStart}
    <input
      {...props}
      className=" ... focus: w-full truncate bg-transparent text-regular outline-0 placeholder:text-light-secondary dark:placeholder:text-dark-secondary"
      placeholder="Enter name"
      type="text"
    />
    {iconEnd}
  </div>
);
