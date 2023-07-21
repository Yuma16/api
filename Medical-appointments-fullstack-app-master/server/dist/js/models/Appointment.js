"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgres_1 = __importDefault(require("../config/postgres"));
const Doctor_1 = __importDefault(require("./Doctor"));
const Patient_1 = __importDefault(require("./Patient"));
const AppointmentStates_1 = __importDefault(require("./AppointmentStates"));
const AppointmentStatus = postgres_1.default.define('appointments', {
    id_doctor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Doctor_1.default,
            key: 'id'
        }
    },
    id_patient: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Patient_1.default,
            key: 'id'
        }
    },
    appointment_date: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    id_status_appointment: {
        type: sequelize_1.DataTypes.TIME,
        references: {
            model: AppointmentStates_1.default,
            key: 'id'
        },
        defaultValue: 1
    },
});
Doctor_1.default.hasMany(AppointmentStatus, {
    foreignKey: 'id_doctor',
    sourceKey: 'id'
});
Patient_1.default.hasMany(AppointmentStatus, {
    foreignKey: 'id_patient',
    sourceKey: 'id'
});
AppointmentStates_1.default.hasMany(AppointmentStatus, {
    foreignKey: 'id_status_appointment',
    sourceKey: 'id'
});
AppointmentStatus.belongsTo(Doctor_1.default, {
    foreignKey: 'id_doctor',
    targetKey: 'id'
});
AppointmentStatus.belongsTo(Patient_1.default, {
    foreignKey: 'id_patient',
    targetKey: 'id'
});
AppointmentStatus.belongsTo(AppointmentStates_1.default, {
    foreignKey: 'id_status_appointment',
    targetKey: 'id'
});
exports.default = AppointmentStatus;
//# sourceMappingURL=Appointment.js.map