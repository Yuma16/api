"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgres_1 = __importDefault(require("../config/postgres"));
const Floor = postgres_1.default.define('floors', {
    level: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.default = Floor;
//# sourceMappingURL=Floor.js.map