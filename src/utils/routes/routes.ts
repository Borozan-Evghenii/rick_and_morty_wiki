import {
  Characters,
  CharacterSingle,
  Episodes,
  EpisodeSingle,
  Home,
  Locations,
  LocationSingle
} from '@pages';

import type { FixMe } from '../../../@types';

interface Routes {
  path: string;
  element: React.ComponentType<FixMe>;
  name?: string;
  toNavigation: boolean;
}

export const routes: Routes[] = [
  { element: Home, name: 'Home', path: '/', toNavigation: true },
  { element: Characters, name: 'Characters', path: '/characters', toNavigation: true },
  { element: Episodes, name: 'Episodes', path: '/episodes', toNavigation: true },
  { element: Locations, name: 'Locations', path: '/locations', toNavigation: true },
  { element: EpisodeSingle, path: 'episode/:id', toNavigation: false },
  { element: LocationSingle, path: 'location/:id', toNavigation: false },
  { element: CharacterSingle, path: 'character/:id', toNavigation: false }
];
