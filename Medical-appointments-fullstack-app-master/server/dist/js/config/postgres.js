"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const enviroment_variables = {
    database: process.env.POSTGRES_DB || 'postgres',
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'Admin123'
};
const sequelize = new sequelize_1.Sequelize(enviroment_variables.database, enviroment_variables.user, enviroment_variables.password, {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = sequelize;
//# sourceMappingURL=postgres.js.map