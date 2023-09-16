import React from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Item {
  _id: string;
  name: string;
}

interface CheckboxListProps {
  title: string;
  list: Item[];
}

const CheckboxList = ({ title, list }: CheckboxListProps) => {
  return (
    <div className="mb-2">
      <p className="mb-4 font-semibold">{title}</p>
      <ScrollArea className="h-[7.7rem] w-[95%]">
        {list.map((item) => (
          <div key={item._id} className="mb-4 flex cursor-pointer select-none items-center space-x-2">
            <Checkbox id={item._id} />
            <label htmlFor={item._id} className="cursor-pointer select-none text-sm font-medium leading-none">
              {item.name}
            </label>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default CheckboxList;
