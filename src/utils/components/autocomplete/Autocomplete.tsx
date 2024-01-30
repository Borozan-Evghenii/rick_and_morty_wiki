import React from 'react';
import { Input } from '@UI';
import { DropDown } from '../dropdown/DropDown.tsx';
import { useInput, useOnClickOutside } from '@hooks';


interface AutocompleteProps<T> {
  icon?: React.ReactNode;
  data: T[];
  onChange: (event: React.MouseEvent<HTMLDivElement>, value: string) => void;
}

export const Autocomplete = <T extends { id: string, value: string }>({
                                                                        data,
                                                                        icon,
                                                                        onChange
                                                                      }: AutocompleteProps<T>) => {
  const [showDropDown, setShowDropDown] = React.useState<boolean>(false);
  const inputValue = useInput('');
  const { componentRef } = useOnClickOutside(() => setShowDropDown(false));

  const filteredData = React.useMemo(() => {
    return data.filter(item => item.value.toLowerCase().includes(inputValue.value.toLowerCase()));
  }, [data, inputValue]);

  return (
    <div className={'relative'} ref={componentRef}>
      <Input
        value={inputValue.value}
        onChange={(event) => {
          inputValue.onChangeValue(event.target.value);
        }}
        onFocus={() => {
          setShowDropDown(prev => !prev);
        }}
        iconStart={icon}
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