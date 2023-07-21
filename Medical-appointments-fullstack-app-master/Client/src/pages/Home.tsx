import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AppointmentsCards from '../components/Home/AppointmentsCards';
import { IAppointment } from '../types';
import { useAppointmentContext } from '../context/AppointmentsContext';

const Home = () => {
  
  const { appointments } = useAppointmentContext() || {
    appointments: []
  };

  return (<>
    <Typography variant='h4' component="h1" textAlign="center">Ultimas citas asignadas</Typography>
    <Box className="home-container">
      { appointments?.map((appointment: IAppointment)=>(
        <AppointmentsCards 
          key={appointment.id}
          data={appointment}
        />
      )) }
    </Box>
    <Link to="/assign-appointment" className="create-appointment-btn">
      <Button variant='contained' color='primary'>Asigna tu cita</Button>
    </Link>
  </>)
};

export default Home;