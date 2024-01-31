import React from 'react';

import { DropDownItem } from './dropDownItem/DropDownItem.tsx';

interface DropDownProps<T> {
  show: boolean;
  className?: string;
  data: T[];
  onSelect: (event: React.MouseEvent<HTMLDivElement>, value: string) => void;
}

export const DropDown = <T extends { id: string; value: string }>({
  data,
  show,
  className,
  onSelect
}: DropDownProps<T>) => {
  const onSelectItem = (event: React.MouseEvent<HTMLDivElement>, value: string) => {
    onSelect(event, value);
  };

  return (
    show && (
      <div
        className={`absolute left-0 right-0 top-[100%] z-10 mt-1 flex max-h-[200px] flex-col overflow-hidden overflow-y-scroll rounded-lg border border-light-accent dark:border-dark-accent ${className}`}
      >
        {data.map((item) => (
          <DropDownItem
            key={item.id}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => onSelectItem(event, item.value)}
          >
            {item.value}
          </DropDownItem>
        ))}
      </div>
    )
  );
};
