import './index.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
 import { Footer, Header } from './utils/components';
import { AppRouter } from './utils/routes/appRouter/AppRouter.tsx';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Outlet />
      <Footer/>
    </>
  );
};

export default App;
