import http from '../http';

const PATH = '/doctors';

export const getDoctors = async () => {
  return http.get(PATH);
};