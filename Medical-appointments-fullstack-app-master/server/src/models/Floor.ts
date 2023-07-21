import { DataTypes } from 'sequelize';
import sequelize from '../config/postgres';

const Floor = sequelize.define('floors', {
  level: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Floor;