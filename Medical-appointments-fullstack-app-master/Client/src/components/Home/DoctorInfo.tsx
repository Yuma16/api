import { Box, Typography } from '@mui/material';
import { IDoctor } from '../../types';

type Props = {
  doctorData: IDoctor;
};

const DoctorInfo = ({ doctorData } : Props) => {
  return (
    <>
      <Box className="people__doctor">
          <Typography>Doctor asignado: { doctorData.first_name } { doctorData.last_name }</Typography>
          <ul>
            <li>
              <Typography>Especialidad: { doctorData.speciality.speciality_name }</Typography>
            </li>
            <li>
              <Typography>Consultorio: { doctorData.consulting_room.office_code } - Piso { doctorData.consulting_room.floor.level }</Typography>
            </li>
          </ul>
        </Box>
    </>
  );
};

export default DoctorInfo;