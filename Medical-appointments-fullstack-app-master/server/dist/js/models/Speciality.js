"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgres_1 = __importDefault(require("../config/postgres"));
const Speciality = postgres_1.default.define('specialities', {
    speciality_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = Speciality;
//# sourceMappingURL=Speciality.js.map