"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgres_1 = __importDefault(require("../config/postgres"));
const ConsultingRoom_1 = __importDefault(require("./ConsultingRoom"));
const Speciality_1 = __importDefault(require("./Speciality"));
const Doctor = postgres_1.default.define('doctors', {
    first_name: {
        type: sequelize_1.DataTypes.STRING
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    id_office_number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: ConsultingRoom_1.default,
            key: 'id'
        }
    },
    id_speciality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'specialities',
            key: 'id'
        }
    }
});
ConsultingRoom_1.default.hasMany(Doctor, {
    foreignKey: 'id_office_number',
    sourceKey: 'id'
});
Speciality_1.default.hasMany(Doctor, {
    foreignKey: 'id_speciality',
    sourceKey: 'id'
});
Doctor.belongsTo(ConsultingRoom_1.default, {
    foreignKey: 'id_office_number',
    targetKey: 'id'
});
Doctor.belongsTo(Speciality_1.default, {
    foreignKey: 'id_speciality',
    targetKey: 'id'
});
exports.default = Doctor;
//# sourceMappingURL=Doctor.js.map