import { DataTypes } from 'sequelize';
import sequelize from '../config/postgres';
import ConsultingRoom from './ConsultingRoom';
import Speciality from './Speciality';

const Doctor = sequelize.define('doctors', {
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  id_office_number: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: ConsultingRoom,
      key: 'id'
    }
  },
  id_speciality: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'specialities',
      key: 'id'
    }
  }
});

ConsultingRoom.hasMany(Doctor, {
  foreignKey: 'id_office_number',
  sourceKey: 'id'
});

Speciality.hasMany(Doctor, {
  foreignKey: 'id_speciality',
  sourceKey: 'id'
});

Doctor.belongsTo(ConsultingRoom, {
  foreignKey: 'id_office_number',
  targetKey: 'id'
});

Doctor.belongsTo(Speciality, {
  foreignKey: 'id_speciality',
  targetKey: 'id'
});

export default Doctor;