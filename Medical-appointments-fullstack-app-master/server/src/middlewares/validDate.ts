import moment from 'moment';

const validDate = async (time: string) => {

  const isValidDate = moment(time, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true).isValid();

  if(!isValidDate) {
    throw new Error('Date is not valid!');
  };

};

export default validDate;