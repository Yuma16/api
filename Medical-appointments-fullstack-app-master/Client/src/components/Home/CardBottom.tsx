import { Box, Typography, IconButton } from '@mui/material';
import { MdModeEdit } from "react-icons/md";
import { getDate } from '../../helpers/time';
import { IAppointment } from '../../types';

type Props = {
  data: IAppointment;
};

const CardBottom = ({ data } : Props) => {
  return (<>
    <Box className="appointment_item">
      <Box>
        <Typography variant='body2'>Fecha creacion: { getDate(data.createdAt) }</Typography>
        <Typography variant='body2'>Ultima actualizacion: { getDate(data.updatedAt)  }</Typography>
      </Box>
      <IconButton className="appointment_item">
        <MdModeEdit />
      </IconButton>
    </Box>
  </>)
}

export default CardBottom;