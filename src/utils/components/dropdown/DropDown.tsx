import { DropDownItem } from './dropDownItem/DropDownItem.tsx';


interface DropDownProps<T> {
  show: boolean;
  className?: string;
  data: T[];
  onSelect: (item: string) => void;
}

export const DropDown = <T extends { id: string, value: string }>({
                                                                    data,
                                                                    show,
                                                                    className,
                                                                    onSelect
                                                                  }: DropDownProps<T>) => {

  const onSelectItem = (value: string) => {
    onSelect(value);
  };

  return show && (
    <div
      className={`flex flex-col mt-1 rounded-lg border border-light-accent dark:border-dark-accent overflow-hidden ${className}`}>
      {data.map((item) =>
        <DropDownItem
          key={item.id}
          onClick={() => onSelectItem(item.value)}
        >
          {item.value}
        </DropDownItem>)}
    </div>
  );

};
