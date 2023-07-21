import http from '../http';

const PATH = '/specialities';

export const getSpecialities = async () => {
  return http.get(PATH);
};