import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routes/routes.ts';
import { useTheme } from '../../hooks/useTheme/useTheme.ts';
import { CiDark, CiLight } from 'react-icons/ci';
import { Logo } from '../../UI/icon';


export const Header: React.FC = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-auto right-auto w-full pt-[20px] px-5 z-50">
      <div className="w-full max-w-[750px] mx-auto bg-light-background dark:bg-dark-background px-[13px] py-[10px] rounded-full border border-light-secondary dark:border-dark-secondary ">
        <div className="flex justify-between items-center">
          <Link to={'/'}>
            <Logo className={'fill-light-primary dark:fill-dark-primary'} width={'40'} height={'40'} />
          </Link>
          <nav className="hidden items-center sm:flex sm:gap-10 ">
            {
              routes.map(route => {
                if (route.path !== '/') {
                  return (<Link to={route.path} key={route.path}
                                className={`link ${route.path === location.pathname && 'linkActive'}`}>
                    {route.name}
                  </Link>);
                }
              })
            }
          </nav>
          <button
            className="w-[40px] h-[40px] bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center "
            onClick={toggleTheme}
          >
            {isDark ?
              <CiLight className="fill-light-primary dark:fill-dark-primary" />
              : <CiDark className="fill-light-primary dark:fill-dark-primary " />}
          </button>
        </div>
      </div>
    </header>
  );
};
