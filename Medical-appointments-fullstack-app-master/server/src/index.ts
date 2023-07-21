import app from './app';

import { config } from 'dotenv';
config();

import sequelize from './config/postgres';

// App initialization

const PORT : string = process.env.PORT || '3000';

app.listen( PORT, ()=>console.log(`Listening in port http://localhost:${ PORT }`));

// Database Connection

(async () =>{
  try {
    await sequelize.authenticate();
    console.log('Postgres database is working!');
  } catch (error) {
    console.log(error);
    console.log('Something went wrong while connecting the database!');
  };
})();

