import { Box, AppBar, Typography, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import '../../styles/app.css';

const Header = () => {
  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar className='container'>
          <Typography variant='h6'>Agendamiento de citas</Typography>
          <Navbar />
        </Toolbar>
      </AppBar>
    </Box>
  </>);
};

export default Header;