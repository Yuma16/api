import moment from 'moment';

export const getDate = (date: Date) =>{
  return moment(date).format('DD-MM-YYYY');
};

export const calculateAge = (date:Date) =>{
  const currentDate = moment();
  const formatDate = moment(date, 'YYYY-MM-DD');

  return currentDate.diff(formatDate, 'years');
};