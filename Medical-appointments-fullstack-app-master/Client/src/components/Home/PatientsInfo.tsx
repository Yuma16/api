import { Box, Typography } from '@mui/material';
import { IPatient } from '../../types';
import { calculateAge, getDate } from '../../helpers/time';


type Props = {
  patientData: IPatient;
};

const PatientsInfo = ({ patientData } : Props) => {
  return (<>
    <Box className="people__patient">
      <Typography>Nombre del paciente: { patientData.first_name } { patientData.last_name }</Typography>
      <Typography>Edad: { calculateAge(patientData.birth_date) }</Typography>
      <Typography>Fecha de nacimiento: { getDate(patientData.birth_date) }</Typography>
      <Typography>Telefono de contacto: { patientData.phone }</Typography>
    </Box>
  </>);
};

export default PatientsInfo;