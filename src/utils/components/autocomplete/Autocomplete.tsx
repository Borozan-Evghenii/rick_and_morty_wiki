import { Input } from '@UI';
import { useInput, useOnClickOutside } from '@hooks';
import React from 'react';
import { CiSearch } from 'react-icons/ci';

import { DropDown } from '../dropdown/DropDown.tsx';

interface AutocompleteProps<T> {
  icon?: React.ReactNode;
  data: T[];
  onChange: (event: React.MouseEvent<HTMLDivElement>, value: string) => void;
  className?: string;
}

export const Autocomplete = <T extends { id: string; value: string }>({
  data,
  icon,
  onChange,
  className
}: AutocompleteProps<T>) => {
  const [showDropDown, setShowDropDown] = React.useState<boolean>(false);
  const inputValue = useInput('');
  const { componentRef } = useOnClickOutside(() => setShowDropDown(false));

  const filteredData = React.useMemo(
    () => data.filter((item) => item.value.toLowerCase().includes(inputValue.value.toLowerCase())),
    [data, inputValue]
  );

  return (
    <div ref={componentRef} className={`relative ${className}`}>
      <Input
        iconStart={!icon ? <CiSearch className="h-full w-5" /> : icon}
        value={inputValue.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          inputValue.onChangeValue(event.target.value);
        }}
        onFocus={() => {
          setShowDropDown((prev) => !prev);
        }}
      />
      <DropDown
        data={filteredData}
        show={showDropDown}
        onSelect={(event, value) => {
          onChange(event, value);
          inputValue.onChangeValue(value);
          setShowDropDown((prev) => !prev);
        }}
      />
    </div>
  );
};
