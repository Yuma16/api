import { Paper, Typography, IconButton } from '@mui/material';

import { MdOutlineMode } from "react-icons/md";

const PatientCard = () => {
  return (<>
    <Paper style={{ width: '30%', padding: '1rem', position: 'relative' }} elevation={4}>
      <Typography variant='h5' textAlign="center">Pepito Perez</Typography>
      <hr />
      <ul>
        <li>
          <Typography>Edad: 25</Typography>
        </li>
        <li>
          <Typography>Fecha de nacimiento: 09/10/1997</Typography>
        </li>
        <li>
          <Typography>Telefono de contacto: 3195558888</Typography>
        </li>
      </ul>
      <IconButton style={{ position: "absolute", bottom: 0, right: 0 }}>
        <MdOutlineMode />
      </IconButton>
    </Paper>
  </>);
};

export default PatientCard;