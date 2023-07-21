import axios from 'axios';
import { IAppointment, IAppointmentPayload } from '../types';

const instance = () => axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  }
});

const http = {
  get: (path: string) => instance().get(path),
  post: (path: string, data: IAppointmentPayload) => instance().post(path, data),
};

export default http;