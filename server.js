const express = require('express');
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static('dist'));

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});