import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

const enviroment_variables = {
  database: process.env.POSTGRES_DB || 'postgres',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'Admin123'
};

const sequelize = new Sequelize(
  enviroment_variables.database,
  enviroment_variables.user,
  enviroment_variables.password,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

export default sequelize;