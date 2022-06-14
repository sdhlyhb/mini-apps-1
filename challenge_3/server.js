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
  db.saveForm1Data(form1Data, (err, response) => {
    if(err) {
      console.log('Err POST', err);
      res.status(500).send(err);
    } else {
      console.log('Sucess saved!', response);
      res.status(200).send('Sucess!');
    }
  })

})

app.put('/api/shipping-info/:id', (req, res) => {
  console.log('this is req.body for post shipping-info:', req.body);
  let form2Data = req.body;
  db.saveForm2Data(form2Data, (err, response) => {
    if(err) {
      console.log('Err POST', err);
      res.status(500).send(err);
    } else {
      console.log('Sucess saved!', response);
      res.status(200).send('Sucess!');
    }
  })

})

app.put('/api/billing-info/:id', (req, res) => {
  console.log('this is req.body for post billing-info:', req.body);
  let form3Data = req.body;
  db.saveForm3Data(form3Data, (err, response) => {
    if(err) {
      console.log('Err POST', err);
      res.status(500).send(err);
    } else {
      console.log('Sucess saved!', response);
      res.status(200).send('Sucess!');
    }
  })

})


app.get('/api/order-summary/:id', (req, res) => {
  console.log('This is req.body for Get order-summary:', req.body);
  console.log('This is req.params for Get order-summary:', req.params); // eg:':12'
  let id = Number(req.params.id.slice(1));
  db.getOrderInfoById(id, (err, response) => {
    if(err) {
      console.log('Err Getting order summary', err);
      res.status(500).send(err);
    } else {
      console.log('Sucess Getting order Summary!');
      res.status(200).send(response);
    }
  })
})








app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
} )