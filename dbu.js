const mysql = require('mysql');
require('dotenv').config();


// MySQL database configuration
const dbu = mysql.createConnection({

      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      PORT: process.env.DB_PORT

  });

  

// Connect to the database
dbu.connect((err) => {
  if (err) {
    console.error('Error connecting to UserDB:', err);
    throw err;
  }
  console.log('Connected to UserDb');
});




module.exports = dbu;
