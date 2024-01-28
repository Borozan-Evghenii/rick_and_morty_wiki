import React from 'react';
import { getProps } from '../../../../../@types';

interface ButtonProps extends getProps<'button'>{
  children: string
  icon?: React.ReactNode
}
const Button:React.FC<ButtonProps> = ({children, icon}) => {

  //type: default | iconic / iconic => rounded-full

  //variant: default | bordered

  //rounded : full | rounded-full

  //styles:

  return (
    <div className={'flex gap-[10px] items-center py-[10px] px-[11px] cursor-pointer rounded-full'}>
      {children}
      <div>
        {icon}
      </div>
    </div>
  );
};

export default Button;