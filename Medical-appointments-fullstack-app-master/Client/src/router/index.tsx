import { createBrowserRouter } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import PublicLayout from '../layout/PublicLayout';

import Home from '../pages/Home';
import CreateAppointment from '../pages/CreateAppointment';
import CreateDoctor from '../pages/CreateDoctor';
import CreatePatient from '../pages/CreatePatient';
import DoctorsView from '../pages/DoctorsView';
import PatientsView from '../pages/PatientsView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/assign-appointment',
        element: <CreateAppointment />
      },
      {
        path: '/assign-appointment/:id',
        element: <CreateAppointment />
      },
      {
        path: '/create-doctor',
        element: <CreateDoctor />
      },
      {
        path: '/create-doctor/:id',
        element: <CreateDoctor />
      },
      {
        path: '/create-patient',
        element: <CreatePatient />
      },
      {
        path: '/create-patient/:id',
        element: <CreatePatient />
      },
      {
        path: '/doctors',
        element: <DoctorsView />
      },
      {
        path: '/patients',
        element: <PatientsView />
      }
    ]
  }
]);