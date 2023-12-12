export const findAge = (dateOfBirth: string) => {
  const data = new Date().getTime() - new Date(dateOfBirth).getTime();
  const newDate = new Date(data).getFullYear() - 1970;
  return newDate;
};
