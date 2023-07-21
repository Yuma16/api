import { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const RegisterMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<>
    <Box className='nav__item'>
      <Typography variant='h6'>
        Registrarse
      </Typography>
      <IconButton onClick={ handleClick }>
        <MdOutlineArrowDropDown className="icon" />
      </IconButton>
    </Box>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/create-doctor'>
          <MenuItem onClick={handleClose}>Como doctor</MenuItem>
        </Link>
        <Link to='/create-patient'>
          <MenuItem onClick={handleClose}>Como paciente</MenuItem>
        </Link>
      </Menu>
  </>);
};

export default RegisterMenu;