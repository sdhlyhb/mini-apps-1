const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const helperFns = require('./helperFns');
const fs = require('fs');

const jsonToCsv = helperFns.jsonToCsv;


// app.use('/', express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {

  res.render('index', {data: ''});

});



/**********working code for input JSON in the testArea*************************/
// app.post('/', (req, res)=> {


// var data = jsonToCsv(JSON.parse(req.body.inputJSON));
// console.log(data);
// res.render('index', {data:data});
// // res.send(data);


// });


app.post('/', upload.single('uploaded_file'),  function(req, res){
  console.log('this is the file:', req.file);
  fs.readFile(req.file.path, "utf8", function(err, jsondata) {
    if(err) {
      console.log('Err Reading the uploaded file!');
    } else {
      //console.log('this is the jsondata:', jsondata);
      var data = jsonToCsv(JSON.parse(jsondata));
      res.render('index', {data:data});

    }
  })


});








app.listen(port, () => console.log(`The app is listening on port ${port}!`))


