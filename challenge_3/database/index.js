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
  connection.query(queryString, (err, idData) => {
    if(err) {
      console.log('Err Create the record!', err);
      callback(err, null);
    } else {
      callback(null, idData);
    }
  })

}

let saveFrom1Data = (form1Data, callback) => {
  let username = form1Data.username;
  let email = form1Data.email;
  let password = form1Data.password;
  let id = form1Data.id;

  let queryString = `UPDATE orderInfo SET username = "${username}", email = "${email}", password = "${password}" WHERE id = ${id};`;

  connection.query(queryString, (err, result) => {
    if(err) {
      console.log('Err save form1 data to db:', err);
      callback(err, null);
    } else {
      console.log('Sucess save form1 data to db!');
      callback(null, result);
    }
  })



};

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
  getOrderInfoById,
  saveFrom1Data

};

