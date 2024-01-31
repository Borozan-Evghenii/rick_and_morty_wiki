import { Footer, Header } from '@components';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppRouter } from './utils/routes/appRouter/AppRouter.tsx';

import './index.css';

const App: React.FC = () => (
  <>
    <Header />
    <AppRouter />
    <Outlet />
    <Footer />
  </>
);

export default App;
