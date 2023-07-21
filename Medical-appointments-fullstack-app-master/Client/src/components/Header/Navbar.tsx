import { Box, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { MdOutlineArrowDropDown } from "react-icons/md";
import ViewsMenu from './ViewsMenu';
import RegisterMenu from './RegisterMenu';

const Navbar = () => {
  return (<>
    <Box className="nav">
      <Typography className='nav__item' variant='h6'>
        <Link className='link' to='/'>
          Inicio
        </Link>
      </Typography>
      <ViewsMenu />      
      <RegisterMenu />
    </Box>
  </>
  );
};

export default Navbar;