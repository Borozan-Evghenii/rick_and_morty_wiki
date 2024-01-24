import { Episodes, Characters, Locations } from '../../pages';


interface routes{
  path: string
  element: React.ComponentType<any>
  name: string
}

export const routes: routes[] = [
  {path: '/', element: Characters, name: 'Characters'},
  {path: '/episodes', element: Episodes, name: 'Episodes'},
  {path: '/locations', element: Locations, name: 'Locations'}
]