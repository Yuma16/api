"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgres_1 = __importDefault(require("../config/postgres"));
const Floor_1 = __importDefault(require("./Floor"));
const ConsultingRoom = postgres_1.default.define('consulting_rooms', {
    office_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    id_floor: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Floor_1.default,
            key: 'id'
        }
    }
});
Floor_1.default.hasMany(ConsultingRoom, {
    foreignKey: 'id_floor',
    sourceKey: 'id'
});
ConsultingRoom.belongsTo(Floor_1.default, {
    foreignKey: 'id_floor',
    targetKey: 'id'
});
exports.default = ConsultingRoom;
//# sourceMappingURL=ConsultingRoom.js.map