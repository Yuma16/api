import { DataTypes } from 'sequelize';
import sequelize from '../config/postgres';

const Patient = sequelize.define('patients', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birth_date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Patient;