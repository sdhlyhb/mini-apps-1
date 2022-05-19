const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const helperFns = require('./helperFns');
const fs = require('fs');
const path = require('path');

const jsonToCsv = helperFns.jsonToCsv;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname,'client')));


app.post('/upload_json', upload.single('uploaded_file'), (req, res) => {
  console.log('this is json post req:', req.body);

  if(!req.file && Object.keys(req.body)) {
    console.log('this is req.body', req.body, typeof(req.body));
    var data = jsonToCsv(JSON.parse(req.body.inputJSON));
    console.log('this is the csv data:', data);
    res.send(data);

  }
    else if(req.file) {
    console.log('this is the file:', req.file);
    fs.readFile(req.file.path, "utf8", function(err, jsondata) {
      if(err) {
        console.log('Err Reading the uploaded file!');
      } else {
        //console.log('this is the jsondata:', jsondata);
        var data = jsonToCsv(JSON.parse(jsondata));
        res.send(data);

    }
  })
}



});





/**********working code for input JSON in the testArea using EJS *************************/

// app.post('/', upload.single('uploaded_file'),  function(req, res){

//   if(!req.file && Object.keys(req.body)) {
//     console.log('this is req.body', req.body, typeof(req.body));
//     var data = jsonToCsv(JSON.parse(req.body.inputJSON));
//     console.log('this is the csv data:', data);
//     res.render('index', {data:data});

//   }

//   else if(req.file) {
//     console.log('this is the file:', req.file);
//     fs.readFile(req.file.path, "utf8", function(err, jsondata) {
//       if(err) {
//         console.log('Err Reading the uploaded file!');
//       } else {
//         //console.log('this is the jsondata:', jsondata);
//         var data = jsonToCsv(JSON.parse(jsondata));
//         res.render('index', {data:data});

//     }
//   })
// }




// });








app.listen(port, () => console.log(`The app is listening on port ${port}!`))


