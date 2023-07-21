import http from '../http';

const PATH = '/patients';

export const getPatients = async () => {
  return http.get(PATH);
};