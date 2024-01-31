import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { DropDown } from '../dropdown/DropDown.tsx';
import { useInput, useOnClickOutside } from '@hooks';


interface SelectProps<T> {
  data: T[];
  onSelect: (event: React.MouseEvent<HTMLDivElement>, value: string) => void;
  prefix?: string;
  icon?: React.ReactNode;
}

export const Select = <T extends { id: string, value: string }>({ data, onSelect, prefix, icon }: SelectProps<T>) => {

  const onSelectDropdownItem = (event: React.MouseEvent<HTMLDivElement>, value: string) => {
    selectedValue.onChangeValue(value);
    setShowDropdown(false);
    onSelect(event, value);
  };

  const [showDropdown, setShowDropdown] = React.useState(false);
  const selectedValue = useInput('');
  const { componentRef } = useOnClickOutside(() => setShowDropdown(false));
  return (

    <div className={'relative'} ref={componentRef}>
      <button
        className={'min-w-[230px] w-full focus:border-light-primary dark:focus:border-dark-primary gap-2.5 border border-light-accent dark:border-dark-accent rounded-lg flex items-center justify-between h-[48px] overflow-hidden px-[12px]'}
        onClick={() => setShowDropdown(true)}
      >
        <p className={'text-light-primary dark:text-dark-primary overflow-hidden truncate ...'}>
          <span className={selectedValue.value !== '' ? 'text-light-secondary dark:text-dark-secondary' : ''}>
            {prefix}
          </span>
          {selectedValue.value}</p>
        {!icon && (<IoIosArrowDown
          className={`fill-light-primary dark:fill-dark-primary ${showDropdown ? 'rotate-180' : ''}`} />)}

      </button>
      <DropDown show={showDropdown} data={data} onSelect={onSelectDropdownItem} />
    </div>
  );
};