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

//this will send back the id (data.insertId) of the generated record;
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






app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
} )