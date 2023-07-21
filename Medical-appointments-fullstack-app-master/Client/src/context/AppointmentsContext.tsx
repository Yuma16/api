import { useState, useEffect, createContext, useContext } from 'react'
import { IAppointment, IDoctor, IPatient, ISpeciality } from '../types'
import { getAppointments } from '../actions/appointments.action';
import { getSpecialities } from '../actions/specialities.action';
import { getPatients } from '../actions/patients.action';
import { getDoctors } from '../actions/doctors.action';

type DataAvailable = {
  appointments?: IAppointment;
  specialities?: ISpeciality;
  patients?: IPatient;
  doctors?: IDoctor;
};

const context = createContext<DataAvailable | undefined>(undefined);

export const useAppointmentContext = () =>{
  if (context) return useContext(context);
};

type Props = {
  children: React.ReactNode;
};

const AppointmentsProvider = ({ children } : Props) => {
  const [appointments, setAppointments] = useState<IAppointment>();
  const [patients, setPatients] = useState<IPatient>();
  const [doctors, setDoctors] = useState<IDoctor>();
  const [specialities, setSpecialities] = useState<ISpeciality>();

  const getAppointmentsData = async () =>{
    try {
      const { data } = await getAppointments();

      setAppointments(data);

    } catch (error) {
      console.log(error);
    };
  };

  const getSpecialitiesData = async () =>{
    try {
      const { data } = await getSpecialities();

      setSpecialities(data);

    } catch (error) {
      console.log(error);
    };
  };

  const getPatientData = async () =>{
    try {
      const { data } = await getPatients();

      setPatients(data);

    } catch (error) {
      console.log(error);
    };
  };

  const getDoctorsData = async () =>{
    try {
      const { data } = await getDoctors();

      setDoctors(data);

    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getAppointmentsData();
    getSpecialitiesData();
    getPatientData();
    getDoctorsData();
  }, []);

  return (<context.Provider value={{ 
      appointments,
      specialities,
      patients,
      doctors
    } }>
    { children }
  </context.Provider>);
};

export default AppointmentsProvider;