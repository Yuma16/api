import { Paper, Typography, IconButton } from '@mui/material';

import { MdOutlineMode } from "react-icons/md";

const DoctorCard = () => {
  return (<>
    <Paper style={{ width: '30%', padding: '1rem', position: 'relative' }} elevation={4}>
      <Typography variant='h5' textAlign="center">Juantio Alcachofa</Typography>
      <hr />
      <ul>
        <li>
          <Typography>Especialidad: Medico general</Typography>
        </li>
        <li>
          <Typography>Consultorio: 404</Typography>
        </li>
        <li>
          <Typography>Piso: 4</Typography>
        </li>
      </ul>
      <IconButton style={{ position: "absolute", bottom: 0, right: 0 }}>
        <MdOutlineMode />
      </IconButton>
    </Paper>
  </>);
};

export default DoctorCard;