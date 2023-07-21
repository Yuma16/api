import { DataTypes } from 'sequelize';
import sequelize from '../config/postgres';
import Doctor from './Doctor';
import Patient from './Patient';
import AppointmentStates from './AppointmentStates';

const AppointmentStatus = sequelize.define('appointments', {
  id_doctor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Doctor,
      key: 'id'
    }
  },
  id_patient: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Patient,
      key: 'id'
    }
  },
  appointment_date: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  id_status_appointment: {
    type: DataTypes.TIME,
    references: {
      model: AppointmentStates,
      key: 'id'
    },
    defaultValue: 1
  },
});

Doctor.hasMany(AppointmentStatus, {
  foreignKey: 'id_doctor',
  sourceKey: 'id'
});

Patient.hasMany(AppointmentStatus, {
  foreignKey: 'id_patient',
  sourceKey: 'id'
});

AppointmentStates.hasMany(AppointmentStatus, {
  foreignKey: 'id_status_appointment',
  sourceKey: 'id'
});

AppointmentStatus.belongsTo(Doctor, {
  foreignKey: 'id_doctor',
  targetKey: 'id'
});

AppointmentStatus.belongsTo(Patient, {
  foreignKey: 'id_patient',
  targetKey: 'id'
});

AppointmentStatus.belongsTo(AppointmentStates, {
  foreignKey: 'id_status_appointment',
  targetKey: 'id'
});

export default AppointmentStatus;