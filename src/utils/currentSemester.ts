export const getCurrentSemester = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  if (currentMonth >= 6) {
    return currentYear + '2';
  }

  return currentYear + '1';
};
