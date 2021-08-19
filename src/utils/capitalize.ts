export const capitalize = (name: string) => {
  const toLowerCase = name?.toLowerCase();
  const splitName = toLowerCase?.split(' ');
  const unionName = splitName?.[0] + ' ' + splitName?.[1];

  return unionName;
};
