import { Box, Typography } from '@mui/material';
import PatientsInfo from './PatientsInfo';
import DoctorInfo from './DoctorInfo';
import { IAppointment } from '../../types';
import { getDate } from '../../helpers/time';

type Props = {
  data: IAppointment;
};

const PeopleInfo = ({ data } : Props) => {
  return (<>
    <Box className="appointment__people">
      <Box>
        <PatientsInfo patientData={ data.patient } />
        <DoctorInfo doctorData={ data.doctor } />
      </Box>
      <Box>
        <Typography>Fecha de cita: { getDate(data.appointment_date) }</Typography>
        <Typography>Estado de la cita: { data.appointment_state.status }</Typography>
      </Box>
    </Box>
  </>)
}

export default PeopleInfo