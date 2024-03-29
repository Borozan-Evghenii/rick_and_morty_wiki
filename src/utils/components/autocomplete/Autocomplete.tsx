import { Input } from '@UI';
import type { DocumentNode } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import { useInput, useOnClickOutside } from '@hooks';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
import { VscLoading } from 'react-icons/vsc';

import { DropDown } from '../dropdown/DropDown.tsx';

interface AutocompleteProps {
  icon?: React.ReactNode;
  query: DocumentNode;
  onSelect: (event: React.MouseEvent<HTMLLIElement>, value: string) => void;
  className?: string;
  onResetValue: () => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  query,
  icon,
  className,
  onSelect,
  onResetValue
}) => {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const inputValue = useInput('');

  const { componentRef } = useOnClickOutside(() => setShowDropDown(false));

  const [getData, { data, loading }] = useLazyQuery(query);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputValue.onChangeValue(event.target.value);

    getData({
      variables: {
        name: event.target.value
      }
    });
  };

  return (
    <div ref={componentRef} className={`relative  ${className}`}>
      <Input
        iconStart={!icon ? <CiSearch className="h-full w-5" /> : icon}
        value={inputValue.value}
        clearIcon={
          <div className="flex items-stretch justify-center">
            {inputValue.value && (
              <TiDeleteOutline
                className=" h-4 w-4 cursor-pointer self-center fill-light-secondary hover:fill-light-primary dark:fill-dark-secondary dark:hover:fill-dark-primary"
                onClick={() => {
                  onResetValue();
                  inputValue.onChangeValue('');
                }}
              />
            )}
          </div>
        }
        iconEnd={
          <div className="flex items-stretch justify-center">
            {loading && <VscLoading className="animate-spin self-center" />}
          </div>
        }
        onChange={handleChange}
        onFocus={() => {
          setShowDropDown((prev) => !prev);
        }}
      />
      <DropDown
        show={showDropDown && data}
        /* eslint-disable-next-line react/jsx-sort-props */
        onSelect={(event, value) => {
          inputValue.onChangeValue(value);
          onSelect(event, value);
          setShowDropDown((prev) => !prev);
        }}
        defaultItem={false}
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */
        data={data ? data[Object.keys(data)[0]].results : []}
      />
    </div>
  );
};
