import React from 'react';
import { Input } from '@UI';
import { DropDown } from '../dropdown/DropDown.tsx';
import { useInput, useOnClickOutside } from '@hooks';
import { CiSearch } from 'react-icons/ci';


interface AutocompleteProps<T> {
  icon?: React.ReactNode;
  data: T[];
  onChange: (event: React.MouseEvent<HTMLDivElement>, value: string) => void;
  className?: string;
}

export const Autocomplete = <T extends { id: string, value: string }>({
                                                                        data,
                                                                        icon,
                                                                        onChange, className

                                                                      }: AutocompleteProps<T>) => {
  const [showDropDown, setShowDropDown] = React.useState<boolean>(false);
  const inputValue = useInput('');
  const { componentRef } = useOnClickOutside(() => setShowDropDown(false));

  const filteredData = React.useMemo(() => {
    return data.filter(item => item.value.toLowerCase().includes(inputValue.value.toLowerCase()));
  }, [data, inputValue]);

  return (
    <div className={`relative ${className}`} ref={componentRef}>
      <Input

        value={inputValue.value}
        onChange={(event) => {
          inputValue.onChangeValue(event.target.value);
        }}
        onFocus={() => {
          setShowDropDown(prev => !prev);
        }}
        iconStart={!icon ? <CiSearch className={'w-5 h-full'} /> : icon}
      />
      <DropDown
        data={filteredData}
        onSelect={(event, value) => {
          onChange(event, value);
          inputValue.onChangeValue(value);
          setShowDropDown(prev => !prev);
        }}
        show={showDropDown}
      />
    </div>
  );
};