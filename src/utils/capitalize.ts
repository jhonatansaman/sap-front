export const capitalize = (name: string) => {
  const splitName = name?.split(' ');
  const unionName = splitName[0] + ' ' + splitName[1];

  return unionName;
};
