export const formatarData = (data: Date) => {
    const newDate = new Date(data);
    const formated = newDate.toLocaleDateString('pt-br', { timeZone: 'UTC' });
    return formated;
  };