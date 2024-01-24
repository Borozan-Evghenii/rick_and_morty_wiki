import React from 'react';
import { Typography } from '../../common';
import { Logo } from '../../common/icon';
import { Link } from 'react-router-dom';

interface HeaderLogoProps {
  path: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ path }) => {
  let title = 'Character';

  if (path !== '/') {
    title = path.replace('/', '');
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }

  return (
    <div className='flex gap-2 items-center py-[20px] '>
      <Logo width={'30'} height={'30'} className={'fill-slat-800 dark:fill-slate-200'}/>
      <Link to={'/'}>
        <Typography size={'text-base'} tag={'p'} className={'text-slat-800 dark:text-slate-200'}>Rick and Morty / </Typography>
      </Link>
        <Typography
          className={'px-[12px] py-[6px] border border-orange-400 rounded-2xl text-slate-800 dark:text-slate-200'}
          size={'text-xs'}
          tag={'span'}
        >{title}</Typography>
    </div>
  );
};

export default HeaderLogo;