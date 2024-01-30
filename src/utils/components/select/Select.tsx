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

  //TODO: Click outside need to return ref and toggle state for open/close
  //TODO: useInput hook

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
        className={' w-full focus:border-light-primary dark:focus:border-dark-primary gap-2.5 mt-[40px] border border-light-accent dark:border-dark-accent rounded-lg flex items-center justify-between h-[48px] overflow-hidden px-[12px]'}
        onClick={() => setShowDropdown(true)}
      >
        <p className={'text-light-primary dark:text-dark-primary'}>{prefix} {selectedValue.value}</p>
        {!icon && (<IoIosArrowDown
          className={`fill-light-primary dark:fill-dark-primary ${showDropdown ? 'rotate-180' : ''}`} />)}

      </button>
      <DropDown show={showDropdown} data={data} onSelect={onSelectDropdownItem} />
    </div>
  );
};