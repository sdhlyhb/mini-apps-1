const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const helperFns = require('./helperFns');

const jsonToCsv = helperFns.jsonToCsv;


// app.use('/', express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {

  res.render('index', {data: ''});

});




app.post('/', (req, res)=> {


var data = jsonToCsv(JSON.parse(req.body.inputJSON));
console.log(data);
res.render('index', {data:data});
// res.send(data);





});









app.listen(port, () => console.log(`The app is listening on port ${port}!`))


