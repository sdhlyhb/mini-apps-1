const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('this is the req.body:', req.body);

    res.status(200).sendFile(path.join(__dirname, '/public/index.html'));


})






app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
} )