import { DropDownItem } from './dropDownItem/DropDownItem.tsx';
import React from 'react';


interface DropDownProps<T> {
  show: boolean;
  className?: string;
  data: T[];
  onSelect: (event: React.MouseEvent<HTMLDivElement>, value: string) => void;
}

export const DropDown = <T extends { id: string, value: string }>({
                                                                    data,
                                                                    show,
                                                                    className,
                                                                    onSelect
                                                                  }: DropDownProps<T>) => {

  const onSelectItem = (event: React.MouseEvent<HTMLDivElement>, value: string) => {
    onSelect(event, value);
  };

  return show && (
    <div
      className={`max-h-[200px] overflow-y-scroll flex flex-col mt-1 rounded-lg border border-light-accent dark:border-dark-accent overflow-hidden absolute top-[100%] left-0 right-0 ${className}`}>
      {data.map((item) =>
        <DropDownItem
          key={item.id}
          onClick={(event) => onSelectItem(event, item.value)}
        >
          {item.value}
        </DropDownItem>)}
    </div>
  );

};
