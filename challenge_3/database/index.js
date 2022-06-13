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

let createNewRecord = (callback) => {
  let queryString = `INSERT INTO orderInfo VALUES ();`;
  connection.query(queryString, (err, id) => {
    if(err) {
      console.log('Err Create the record!', err);
      callback(err, null);
    } else {
      callback(null, id);
    }
  })

}

// let saveFrom1Data = (username, email, password) => {



// };

// let saveFrom2Data = () => {

// };

// let saveFrom3Data = () => {

// };

let getOrderInfoById = (id, callback) => {
  let queryString = `SELECT * FROM orderInfo WHERE id = ${id}`;
  connection.query(queryString, (err, result) => {
    if(err) {
      console.log('Err getting order info from database!', err);
      callback(err, null);
    } else {
      callback(null, result);
    }

  });
}






module.exports = {
  createNewRecord,
  getOrderInfoById

};

