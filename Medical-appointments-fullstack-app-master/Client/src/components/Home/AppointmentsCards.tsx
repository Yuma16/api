import { Paper } from '@mui/material';
import '../../styles/app.css';
import CardBottom from './CardBottom';
import PeopleInfo from './PeopleInfo';
import { IAppointment } from '../../types';


type Props = {
  data: IAppointment;
};

const AppointmentsCards = ({ data } : Props) => {
  return (<>
    <Paper className='appointment__container' elevation={4}>
      <PeopleInfo data={data} />
      <CardBottom data={data} />
    </Paper>    
  </>
  );
};

export default AppointmentsCards;