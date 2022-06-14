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

let saveForm1Data = (form1Data, callback) => {
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

let saveForm2Data = (form2Data, callback) => {
  let line1 = form2Data.line1;
  let line2 =form2Data.line2;
  let city = form2Data.city;
  let state = form2Data.state;
  let zipcode = form2Data.zipcode;
  let phoneNumber = form2Data.phoneNumber;
  let id = form2Data.id;

  let queryString = `UPDATE orderInfo SET line1 = "${line1}", line2 = "${line2}", city = "${city}", state = "${state}",zipcode = "${zipcode}",phoneNumber = "${phoneNumber}" WHERE id = ${id};`;

  connection.query(queryString, (err, result) => {
    if(err) {
      console.log('Err save form2 data to db:', err);
      callback(err, null);
    } else {
      console.log('Sucess save form2 data to db!');
      callback(null, result);
    }
  })


};

let saveForm3Data = (form3Data, callback) => {
  let creditCardNumber = form3Data.creditCardNumber;
  let expiryDate =form3Data.expiryDate;
  let cvv = form3Data.cvv;
  let billingZip = form3Data.billingZip;
  let id = form3Data.id;


  let queryString = `UPDATE orderInfo SET creditCardNumber = "${creditCardNumber}", expiryDate = "${expiryDate}", cvv = "${cvv}", billingZip = "${billingZip}" WHERE id = ${id};`;

  connection.query(queryString, (err, result) => {
    if(err) {
      console.log('Err save form3 data to db:', err);
      callback(err, null);
    } else {
      console.log('Sucess save form3 data to db!');
      callback(null, result);
    }
  })

};

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
  saveForm1Data,
  saveForm2Data,
  saveForm3Data

};

