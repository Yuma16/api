import express, { Application } from 'express';
import morgan from 'morgan';

const app : Application = express();

// Middlewares

app.use(morgan('dev'));
app.use(express.json());

// Routes

import patientsRoutes from './routes/patients.routes';
import floorsRoutes from './routes/floors.routes';
import consultingRoomsRoutes from './routes/consultingRooms.routes';
import specialitiesRoutes from './routes/specilaities.routes';
import doctorsRoutes from './routes/doctors.routes';
import appointmentStatusRoutes from './routes/appointmentStates.routes';
import appointmentsRoutes from './routes/appointments.routes';

const PATH = '/api/v1';

app.use(`${ PATH }/patients`, patientsRoutes);
app.use(`${ PATH }/floors`, floorsRoutes);
app.use(`${ PATH }/consulting-routes`, consultingRoomsRoutes);
app.use(`${ PATH }/specialities`, specialitiesRoutes);
app.use(`${ PATH }/doctors`, doctorsRoutes);
app.use(`${ PATH }/appointment-states`, appointmentStatusRoutes);
app.use(`${ PATH }/appointments`, appointmentsRoutes);

export default app;