import { Typography, Stack,  } from '@mui/material';
import PatientCard from '../components/Patients/PatientCard';

const PatientsView = () => {
  return (<>
    <Typography variant='h4' component="h1" textAlign="center">Pacientes registrados</Typography>
    <Stack gap={2} flexDirection='row' flexWrap='wrap'>
      <PatientCard />
      <PatientCard />
      <PatientCard />
    </Stack>
  </>)
};

export default PatientsView;
