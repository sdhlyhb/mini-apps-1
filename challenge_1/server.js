const express = require ('express');
const app = express();
const port = 3001;
const path = require('path');

app.use('/', express.static(path.join(__dirname,'client')));











app.listen(port, () => console.log(`The app is listening on port ${port}!`))