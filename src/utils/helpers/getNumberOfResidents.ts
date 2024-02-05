export const getNumberOfResidents = (length: number) => {
  const residents: number | string = length - 5;
  return residents > 0 ? residents : '';
};
