import React from 'react';

import { DropDownItem } from './dropDownItem/DropDownItem.tsx';

interface DropDownProps<T> {
  show: boolean;
  className?: string;
  data: T[];
  defaultItem?: boolean;
  onSelect: (event: React.MouseEvent<HTMLLIElement>, value: string) => void;
}

export const DropDown = <T extends { id: string; name: string } | undefined>({
  data,
  show,
  className,
  onSelect,
  defaultItem = true
}: DropDownProps<T>) => {
  const onSelectItem = (event: React.MouseEvent<HTMLLIElement>, value: string) => {
    onSelect(event, value);
  };

  return (
    show && (
      <ul
        className={`absolute left-0 right-0 top-[100%] z-10 mt-1 flex max-h-[200px] flex-col overflow-hidden overflow-y-scroll rounded-lg border border-light-accent dark:border-dark-accent ${className}`}
      >
        {defaultItem && (
          <DropDownItem
            onClick={(event: React.MouseEvent<HTMLLIElement>) => onSelectItem(event, '')}
          >
            Default
          </DropDownItem>
        )}
        {data &&
          data?.map((item) => (
            <DropDownItem
              key={item!.id}
              onClick={(event: React.MouseEvent<HTMLLIElement>) => onSelectItem(event, item!.name)}
            >
              {item!.name}
            </DropDownItem>
          ))}
      </ul>
    )
  );
};
