import { Footer, Header } from '@components';
import { Outlet } from 'react-router-dom';

import { AppRouter } from './utils/routes/appRouter/AppRouter.tsx';

import './index.css';

const App = () => (
  <>
    <Header />
    <AppRouter />
    <Outlet />
    <Footer />
  </>
);

export default App;
