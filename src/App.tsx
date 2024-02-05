/* eslint-disable react/jsx-sort-props */
import {
  Characters,
  CharacterSingle,
  Episodes,
  EpisodeSingle,
  Home,
  Locations,
  LocationSingle
} from '@pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import { RootLayout } from './utils/components/layouts/rootLayout/RootLayout.tsx';
import { ROUTER } from './utils/routes/routerPathConstants.ts';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTER.ROOT} element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTER.CHARACTERS} element={<Characters />} />
        <Route path={ROUTER.EPISODES} element={<Episodes />} />
        <Route path={ROUTER.LOCATIONS} element={<Locations />} />
        <Route path={ROUTER.CHARACTER_SINGLE} element={<CharacterSingle />} />
        <Route path={ROUTER.EPISODE_SINGLE} element={<EpisodeSingle />} />
        <Route path={ROUTER.LOCATION_SINGLE} element={<LocationSingle />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
