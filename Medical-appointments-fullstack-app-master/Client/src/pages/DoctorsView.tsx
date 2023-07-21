import { Typography, Stack } from '@mui/material';
import DoctorCard from '../components/Doctors/DoctorCard';

const DoctorsView = () => {
  return (<>
    <Typography variant='h4' component="h1" textAlign="center">Doctores registrados</Typography>
    <Stack gap={2} flexDirection='row' flexWrap='wrap'>
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
    </Stack>
  </>)
};

export default DoctorsView;