export const usePageTitle = (path: string) => {
  let title = '';
  if (path !== '/') {
    title = path.replace('/', '');
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }
  return title;
};