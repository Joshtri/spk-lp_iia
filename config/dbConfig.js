import { Sequelize } from "sequelize";
import { config } from "dotenv";
import path from 'path';
import mysql2 from 'mysql2'; // Import mysql2 as ES module
import envFile from "./envConfig.js";

// Load environment variables from .env file
// config();
config({ path: path.resolve(process.cwd(), envFile) });

// const db = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS,
//     {
//         host: process.env.DB_HOST,
//         dialect: "mysql",
//         port: process.env.DB_PORT,
//         logging: false // Optional: Turn off logging SQL queries
//     }
// );

const db = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database:process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  dialectModule: mysql2, // Use mysql2 as the dialect module
    // benchmark: true,
    // port: process.env.DB_PORT

});
// const db = new Sequelize({
//     host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database:process.env.DB_NAME,
//     dialect: 'mysql',
//     dialectModule: mysql2, // Use mysql2 as the dialect module
//     // benchmark: true,
//     // port: process.env.DB_PORT

// });


try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


export default db;