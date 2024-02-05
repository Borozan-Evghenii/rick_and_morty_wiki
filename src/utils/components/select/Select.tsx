import { useInput, useOnClickOutside } from '@hooks';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { DropDown } from '../dropdown/DropDown.tsx';

interface SelectProps<T> {
  data: T[];
  onSelect: (event: React.MouseEvent<HTMLDivElement>, value: string) => void;
  prefix?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Select = <T extends { id: string; value: string }>({
  data,
  onSelect,
  prefix,
  icon,
  className
}: SelectProps<T>) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const selectedValue = useInput('');
  const { componentRef } = useOnClickOutside(() => setShowDropdown(false));

  const onSelectDropdownItem = (event: React.MouseEvent<HTMLDivElement>, value: string) => {
    selectedValue.onChangeValue(value);
    setShowDropdown(false);
    onSelect(event, value);
  };

  return (
    <div ref={componentRef} className={`relative ${className}`}>
      <button
        className=" flex h-[48px] w-full items-center justify-between gap-2.5 overflow-hidden rounded-lg border border-light-accent px-[12px] focus:border-light-primary dark:border-dark-accent dark:focus:border-dark-primary"
        onClick={() => setShowDropdown(true)}
      >
        <p className="... overflow-hidden truncate text-light-primary dark:text-dark-primary">
          <span
            className={
              selectedValue.value !== '' ? 'text-light-secondary dark:text-dark-secondary' : ''
            }
          >
            {prefix}
          </span>
          {selectedValue.value}
        </p>
        {!icon && (
          <IoIosArrowDown
            className={`fill-light-primary dark:fill-dark-primary ${showDropdown ? 'rotate-180' : ''}`}
          />
        )}
      </button>
      <DropDown data={data} show={showDropdown} onSelect={onSelectDropdownItem} />
    </div>
  );
};
