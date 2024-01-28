import React from 'react';

interface ImageGroupProps {
  data?: {
    id:string
    name: string
    image:string
  }[]
}


export const ImageGroup :React.FC<ImageGroupProps>= ({data}) => {
  return (
    <div className={'flex overflow-hidden pr-3 '}>
      {
        data?.map(item => (
          <div key={item.id} className={' rounded-full w-10 h-10 overflow-hidden mr-[-10px]'}>
            <img src={item.image} alt={item.name} />
          </div>
        ))
      }
    </div>
  );
};
