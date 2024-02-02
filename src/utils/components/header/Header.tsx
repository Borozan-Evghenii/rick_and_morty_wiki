import { Logo } from '@UI/icon';
import { useTheme } from '@hooks';
import React from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { Link, useLocation } from 'react-router-dom';

import { routes } from '../../routes/routes.ts';

export const Header: React.FC = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed left-auto right-auto top-0 z-50 w-full px-5 pt-[20px]">
      <div className="mx-auto w-full max-w-[750px] rounded-full border border-light-secondary bg-light-background px-[13px] py-[10px] dark:border-dark-secondary dark:bg-dark-background ">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo className="fill-light-primary dark:fill-dark-primary" height="40" width="40" />
          </Link>
          <nav className="hidden items-center sm:flex sm:gap-10 ">
            {routes.map((route) => {
              if (route.path !== '/' && route.toNavigation) {
                return (
                  <Link
                    key={route.path}
                    className={`link ${route.path === location.pathname && 'linkActive'}`}
                    to={route.path}
                  >
                    {route.name}
                  </Link>
                );
              }
              return null;
            })}
          </nav>
          <button
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-light-accent dark:bg-dark-accent "
            onClick={toggleTheme}
          >
            {isDark ? (
              <CiLight className="fill-light-primary dark:fill-dark-primary" />
            ) : (
              <CiDark className="fill-light-primary dark:fill-dark-primary " />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
