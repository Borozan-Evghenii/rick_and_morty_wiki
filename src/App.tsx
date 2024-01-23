import './index.css'
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppRouter, Header } from './utils/components';

const App:React.FC = () => {
  return (
    <>
      <Header/>
      <AppRouter/>
      <Outlet />
    </>
  );
};

export default App;
