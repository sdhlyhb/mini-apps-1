const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/', (req, res)=> {

  console.log('this is req.body:', req.body);

});







app.listen(port, () => console.log(`The app is listening on port ${port}!`))


