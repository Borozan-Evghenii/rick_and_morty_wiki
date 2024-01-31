import React from 'react';

interface ImageGroupProps {
  data?: {
    id: string;
    name: string;
    image: string;
  }[];
}

export const ImageGroup: React.FC<ImageGroupProps> = ({ data }) => (
  <div className="flex max-w-full pr-3 ">
    {data?.map((item) => (
      <div key={item.id} className=" mr-[-10px] h-10 w-10 overflow-hidden rounded-full">
        <img alt={item.name} src={item.image} />
      </div>
    ))}
  </div>
);
