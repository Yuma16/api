import http from '../http';
import { IAppointmentPayload } from '../types';

const PATH = '/appointments';

export const getAppointments = async () => {
  return http.get(PATH);
};

export const createAppointments = async (data: any) => {
  return http.post(PATH, data);
};