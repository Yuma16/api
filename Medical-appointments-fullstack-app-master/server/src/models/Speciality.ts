import { DataTypes } from 'sequelize';
import sequelize from '../config/postgres';
import ConsultingRoom from './ConsultingRoom';

const Speciality = sequelize.define('specialities', {
  speciality_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Speciality;