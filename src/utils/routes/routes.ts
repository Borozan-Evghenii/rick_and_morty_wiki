import { Characters, Episodes, Home, Locations } from '@pages';
import { fixMe } from '../../../@types';


interface routes{
  path: string
  element: React.ComponentType<fixMe>;
  name?: string;
  toNavigation: boolean;
}

export const routes: routes[] = [
  { path: '/', element: Home, name: 'Home', toNavigation: true },
  { path: '/characters', element: Characters, name: 'Characters', toNavigation: true },
  { path: '/episodes', element: Episodes, name: 'Episodes', toNavigation: true },
  { path: '/locations', element: Locations, name: 'Locations', toNavigation: true },
  { path: '/episodes/:id', element: Episodes, toNavigation: false },
  { path: '/location/:id', element: Locations, toNavigation: false },
  { path: '/character/:id', element: Locations, toNavigation: false }
]