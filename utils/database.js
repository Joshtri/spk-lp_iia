const mysql = require('mysql2');
require('dotenv').config();
//config database

const db = mysql.createConnection({
    host :  process.env.DB_HOST,
    user :  process.env.DB_USERNAME,
    database :  process.env.DB_NAME,
    password:  process.env.DB_PASSWORD,
    port : process.env.DB_PORT
});

// Tautan ke database
db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Terhubung ke database MySQL');
});

module.exports = db;
