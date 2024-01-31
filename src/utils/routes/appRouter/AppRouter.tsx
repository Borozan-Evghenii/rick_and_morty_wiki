import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '../routes.ts';

export const AppRouter: React.FC = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} element={<route.element />} path={route.path} />
    ))}
  </Routes>
);
