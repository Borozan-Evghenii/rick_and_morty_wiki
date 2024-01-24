import React from 'react';
import { routes } from '../../routes/routes.ts';
import { Route, Routes } from 'react-router-dom';

export const AppRouter: React.FC= () => {
  return (
    <>
      {
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={<route.element/>}></Route>
          ))}
        </Routes>
      }
    </>
  );
};