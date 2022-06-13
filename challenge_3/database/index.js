const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'orders'
});

connection.connect(err => {
  if(err) {
    console.log('Err connecting to database!', err);
  } else {
    console.log('Connected to mysql!');
  }
})


//query functions:

