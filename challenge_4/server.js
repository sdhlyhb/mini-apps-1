const express = require('express');
let app = express();
const path = require('path');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/dist')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'));
});











let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});