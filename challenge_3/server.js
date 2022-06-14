const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

let db = require(path.join(__dirname, '/database/index.js'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('this is the req.body:', req.body);

    res.status(200).sendFile(path.join(__dirname, '/public/index.html'));


})

//this will send back data containing the id (data.insertId) of the generated record;
app.post('/api/createId', (req, res) => {
  db.createNewRecord((err, data) => {
    if(err) {
      console.log('Err POST', err);
      res.status(500).send(err);
    } else {
      console.log('Sucess create and get an id!', data.insertId);
      res.status(200).send(data);
    }
  })

})

app.put('/api/user-account-info/:id', (req, res) => {
  console.log('this is req.body for post user-account-info:', req.body);
  let form1Data = req.body;
  db.saveFrom1Data(form1Data, (err, response) => {
    if(err) {
      console.log('Err POST', err);
      res.status(500).send(err);
    } else {
      console.log('Sucess saved!', response);
      res.status(200).send('Sucess!');
    }
  })

})








app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
} )