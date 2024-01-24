import React from 'react';
import HeaderLogo from './headerLogo/HeaderLogo.tsx';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routes/routes.ts';
import { Typography } from '../common';
import { useTheme } from '../../hooks/useTheme/useTheme.ts';
import { CiDark, CiLight } from 'react-icons/ci';


export const Header : React.FC= () => {
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className='bg-white dark:bg-gray-700 transition'>
      <div className='appContainer'>
        <div className='flex justify-between items-center'>
          <HeaderLogo path={location.pathname} />
          <nav className='flex gap-[20px] items-center'>
            {
              routes.map(route => (
                <Link to={route.path} key={route.path}>
                  <Typography
                    className={location.pathname === route.path ? 'text-orange-400' : 'text-slate-800 dark:text-slate-200'}
                    size={'text-sm'}
                    tag={'p'}
                  >{route.name}</Typography>
                </Link>
              ))
            }
            <button
              className='p-[8px] border rounded-lg'
              onClick={toggleTheme}
            >
              {isDark ?
                <CiLight className='fill-slate-800 dark:fill-slate-200' />
                : <CiDark className='fill-slate-800 dark:fill-slate-200' />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
