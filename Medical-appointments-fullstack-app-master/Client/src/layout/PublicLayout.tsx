import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Container } from '@mui/material';
import AppointmentsProvider from '../context/AppointmentsContext';

const PublicLayout = () => {
  return (<>
    <Header />
    <Container style={{ marginTop: '1rem'}}>
      <AppointmentsProvider>
        <Outlet />
      </AppointmentsProvider>
    </Container>
  </>
  );
};

export default PublicLayout;