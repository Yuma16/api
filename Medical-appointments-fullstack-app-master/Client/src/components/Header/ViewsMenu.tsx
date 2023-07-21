import { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const ViewsMenu = () => {
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
        Ver
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
        <Link to='/doctors'>
          <MenuItem onClick={handleClose}>Doctores</MenuItem>
        </Link>
        <Link to='/patients'>
          <MenuItem onClick={handleClose}>Pacientes</MenuItem>
        </Link>
      </Menu>
  </>);
};

export default ViewsMenu;