const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'Students'
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database ');
    return;
  }
  console.log('Connected to MySQL database');
});
  module.exports=connection;