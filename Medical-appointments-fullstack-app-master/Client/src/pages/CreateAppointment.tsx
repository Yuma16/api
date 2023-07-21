import { useState, useEffect, SetStateAction } from 'react'
import { Typography, Button, Stack } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import { useAppointmentContext } from '../context/AppointmentsContext';
import { IAppointmentPayload, IDoctor, IPatient, ISpeciality } from '../types/index';
import { createAppointments } from '../actions/appointments.action';

const formatDateToPostgres = (date:Date) =>{
  return  moment(date).format('YYYY-MM-DD HH:mm:ss.SSSZ');
};

const CreateAppointment = () => {
  const [initialValues, setInitialValues] = useState({
    patient: 0,
    speciality: 0,
    doctor: 0,
    date: new Date(),
  });

  const { specialities, patients, doctors  } = useAppointmentContext() || {
    specialities: [],
    patients: [],
    doctors: []
  };

  return (<>
    <Typography variant='h4' component='h1' textAlign="center">Asignar cita</Typography>
    <Formik
      initialValues={ initialValues }

      enableReinitialize

      onSubmit={(values) =>{
        console.log(values);

        const { date, ...rest } = values;

        const dataToSend = {
          appointment_date: formatDateToPostgres(date),
          ...rest
        };

        createAppointments(dataToSend);
      }}
    >
      { ({})=>(
        <Form>
          <Stack alignItems="stretch" gap={4} marginBottom={4}>
            <Stack>
              <label htmlFor="patient">Paciente:</label>
              <Field className="create_app_input"   id='patient' as='select' name="patient">
                <option value="">Seleccione el paciente al cual le asignara una cita...</option>
                { patients?.map((patient: IPatient)=>(
                  <option key={patient.id} value={ patient.id }>{ patient.first_name } { patient.last_name }</option>
                )) }
              </Field>
            </Stack>
            <Stack>
              <label htmlFor="speciality">Especialidad:</label>
              <Field className="create_app_input" id='speciality' as='select' name="speciality">
                <option value="">Seleccione una especialidad...</option>
                { specialities?.map( (speciality: ISpeciality)=>(
                  <option key={ speciality.id } value={ speciality.id }>{ speciality.speciality_name }</option>
                )) }
              </Field>              
            </Stack>
            <Stack>
              <label htmlFor="doctor">Doctor:</label>
              <Field className="create_app_input"  id='doctor' as='select' name="doctor">
                <option value="">Seleccione a un doctor disponible...</option>
                { doctors?.map( (doctor: IDoctor)=>(
                  <option key={ doctor.id } value={ doctor.id }>{ doctor.first_name } { doctor.last_name }</option>
                )) }
              </Field> 
            </Stack>
            <Stack>
              <label htmlFor="speciality">Fecha de la cita:</label>
              <Field className="create_app_input"   id='speciality' type='date' name="speciality" placeholder="Seleccione una fecha disponible" />
            </Stack>
            <Button type="submit" variant='contained'>Crear cita</Button>
          </Stack>
        </Form>
      ) }
    </Formik>
  </>
  );
};

export default CreateAppointment;