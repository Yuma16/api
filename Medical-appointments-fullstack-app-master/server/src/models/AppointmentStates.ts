import { DataTypes } from 'sequelize';
import sequelize from '../config/postgres';

const AppointmentStates = sequelize.define('appointment_states', {
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default AppointmentStates;