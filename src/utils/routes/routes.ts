import { Episodes, Characters, Locations, Home } from '../../pages';


interface routes{
  path: string
  element: React.ComponentType<any>
  name: string
}

export const routes: routes[] = [
  {path: '/', element: Home, name: 'Home'},
  {path: '/characters', element: Characters, name: 'Characters'},
  {path: '/episodes', element: Episodes, name: 'Episodes'},
  {path: '/locations', element: Locations, name: 'Locations'}
]