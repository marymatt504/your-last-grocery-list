var express = require('express');
var bodyParser = require('body-parser');
let db = require('../database/index.js');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));



app.post('/users', (req, res) => {

  console.log('req.body.username', req.body.username);
  let { username, password } = req.body;

  db.addUser(username, password, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});

// app.get('/items', function (req, res) {
//   items.selectAll(function (err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

